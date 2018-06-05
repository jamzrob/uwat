package main 

import (
	"cloud.google.com/go/datastore"
	"encoding/json"
	"fmt"
	"bytes"
	"github.com/satori/go.uuid"
	"golang.org/x/net/context"
	"golang.org/x/oauth2/google"
	storage "google.golang.org/api/storage/v1"
	"html/template"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/smtp"
	"strings"
	"time"
)

var projID = "unlocking-wat"
var ctx = context.Background()
var client, _ = datastore.NewClient(ctx, projID)

func fatalf(service *storage.Service, errorMessage string, args ...interface{}) {
	log.Fatalf("Dying with error:\n"+errorMessage, args...)
}

const scope = storage.DevstorageFullControlScope

type User struct {
	Name     string    `datastore:"name"`
	Email    string    `datastore:"email"`
	Password string    `datastore:"password"`
	Created  time.Time `datastore:"created"`
	Id       string    `datastore:"id"`
}

type Application struct {
	Name        string `datastore:"name"`
	Email       string `datastore:"email"`
	Number      string `datastore:"number"`
	Handle      string `datastore:"handle"`
	Course      string `datastore:"course"`
	Location    string `datastore:"location"`
	Hub         string `datastore:"hub"`
	Age         string `datastore:"age"`
	Education   string `datastore:"education"`
	Referral    string `datastore:"referral"`
	HubReferral string `datastore:"hubreferral"`
	About       string `datastore:"about"`
	Laptop      string `datastore:"laptop"`
	Created     string `datastore:"created"`
	Id          string `datastore:"id"`
}

//
type ActiveUser struct {
	Name     string
	Email    string
	LoggedIn string
}

type Gallery struct {
	Name    string    `datastore:"name"`
	Created time.Time `datastore:"created"`
	Gallery string    `datastore:"gallery"`
}

type Image struct {
	Name    string    `datastore:"name"`
	Created time.Time `datastore:"created"`
	Gallery string    `datastore:"gallery"`
}

type Collection struct {
	Gallery string
	Images  []Image
}

type isLoggedIn struct {
	User     User
	LoggedIn bool
}

type Blog struct {
	Author  string    `datastore:"ename"`
	Title   string    `datastore:"title"`
	Image   string    `datastore:"pic"`
	Body    string    `datastore:"body"`
	Created time.Time `datastore:"created"`
	Id      string    `datastore:"id"`
}

var templates, templates_err = template.ParseFiles("index.html")

func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/api/logIn", logIn)
	http.HandleFunc("/api/addUser", addUser)
	http.HandleFunc("/api/sendMessage", sendMessage)
	http.HandleFunc("/api/apply", apply)
	http.HandleFunc("/api/getApplications", getApplications)
	http.HandleFunc("/api/addGallery", addGallery)
	http.HandleFunc("/api/getGallery", getGallery)
	http.HandleFunc("/api/addBlog", newBlogPost)
	http.HandleFunc("/api/getBlog", getBlogPost)
	http.Handle("/public/", http.FileServer(http.Dir(".")))
	log.Print("Listening on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func index(w http.ResponseWriter, req *http.Request) {
	templates.Execute(w, "")
}

func logIn(w http.ResponseWriter, req *http.Request) {

	var user User

	email := req.FormValue("email")
	pass := req.FormValue("password")

	if email != "" {
		query := datastore.NewQuery("Users").Filter("email =", email)
		it := client.Run(ctx, query)
		_, err := it.Next(&user)
		if err != nil {
			log.Fatalf("login: i amthe problem %v", err)
		}

		if pass == user.Password {
			active := &ActiveUser{
				Name:     user.Name,
				Email:    user.Email,
				LoggedIn: "true",
			}

			log.Println(active)
			currentUser, err := json.Marshal(active)
			if err != nil {
				log.Println(err)
			}
			w.Write([]byte(currentUser))
		}
	}

}

func addUser(w http.ResponseWriter, rw *http.Request) {

	name := rw.FormValue("name")
	email := rw.FormValue("email")
	password := rw.FormValue("password")

	sID, err := uuid.NewV4()
	if err != nil {
		fmt.Printf("Something went wrong: %s", err)
		return
	}

	user := &User{
		Name:     name,
		Email:    email,
		Password: password,
		Created:  time.Now(),
		Id:       sID.String(),
	}

	key := datastore.IncompleteKey("Users", nil)
	log.Println(key)

	it, err := client.Put(ctx, key, user)
	if err != nil {
		log.Fatalf("Error fetching next task: %v", err)
	}

	log.Println(it.ID)

}

func apply(w http.ResponseWriter, req *http.Request) {
	name := req.FormValue("name")
	email := req.FormValue("email")
	number := req.FormValue("number")
	handle := req.FormValue("handle")
	course := req.FormValue("course")
	location := req.FormValue("location")
	hub := req.FormValue("hub")
	age := req.FormValue("age")
	education := req.FormValue("education")
	referral := req.FormValue("referral")
	about := req.FormValue("about")
	hubreferral := req.FormValue("hubreferral")
	laptop := req.FormValue("laptop")
	sID, err := uuid.NewV4()
	if err != nil {
		fmt.Printf("Something went wrong: %s", err)
		return
	}

	app := &Application{
		Name:        name,
		Email:       email,
		Number:      number,
		Handle:      handle,
		Course:      course,
		Location:    location,
		Hub:         hub,
		Age:         age,
		Education:   education,
		Referral:    referral,
		About:       about,
		HubReferral: hubreferral,
		Laptop:      laptop,
		Created:     time.Now().Local().Format("2006-01-02"),
		Id:          sID.String(),
	}

	key := datastore.IncompleteKey("Applications", nil)
	log.Println(key)

	raaw, err := client.Put(ctx, key, app)
	if err != nil {
		log.Fatalf("Error fetching next task: %v", err)
	}
	log.Println(raaw)
	recieverEmail := email
	senderEmail := "info@unlockingwat.com"
	senderPass := "unlockingwat2017"
	msg := "From: " + senderEmail + "\n" +
		"To: " + recieverEmail + "\n" +
		"Subject: " + "Unlocking Women and Technology" + "\n\n" +
		"Hello, \n\n" +
		"Thank you for applying to Unlocking Women and Technology(UWAT). \n\n" +
		"Over the years, Unlocking Women and Technology has trained over 150 women in Accra through coding and has given 58 an opportunity to kickstart their businesses through our incubator programme. \n\n" +
		"This programme is a 12 week intensive technical training were participants learn how to build websites using HTML, CSS (pls explain this in simple terms for me) \n\n" +
		"Participants in Accra will be trained" + "\n" +
		"-Graphic Design" + "\n" +
		"-Videography" + "\n" +
		"-Photography" + "\n\n" +
		"What do I need to have to get started?" + "\n" +
		"- A personal Laptop " + "\n" +
		"- An email address, a Twitter account " + "\n" +
		"- Passion & Determination: " + "\n\n" +
		"Pls note: The training programme will begin in January 2018. You will be sent an email for an interview😊.Get your heels 👠on and let’s get all techy😎👩🏽‍💻. \n" +
		"UWAT- Giving every woman the opportunity to learn to code and to start her business. \n\n" +
		"Cheers," + "\n" +
		"UWAT team." + "\n\n" +
		"Should you have any concerns, do not hesitate to send an email to info@unlockingwat.com. \n\n"

	sent := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", senderEmail, senderPass, "smtp.gmail.com"),
		senderEmail, []string{recieverEmail}, []byte(msg))

	if sent != nil {
		log.Printf("smtp error: %s", sent)
	}
}

func getApplications(w http.ResponseWriter, req *http.Request) {
	var apps []Application
	query := datastore.NewQuery("Applications").Order("created")
	client.GetAll(ctx, query, &apps)
	list, err := json.Marshal(apps)
	if err != nil {
		log.Println(err)
	}
	w.Write([]byte(list))
}

func sendMessage(w http.ResponseWriter, req *http.Request) {
	name := req.FormValue("name")
	email := req.FormValue("email")
	message := req.FormValue("message")

	recieverEmail := "info@unlockingwat.com"
	senderEmail := "info@unlockingwat.com"
	senderPass := "unlockingwat2017"
	msg := "From: " + senderEmail + "\n" +
		"To: " + recieverEmail + "\n" +
		"Subject: " + "Uwat Messages" + "\n\n" +
		"Hello, \n\n" +
		"Someone sent you a message from the Unlocking Women and Technology site." + "See details \n\n" +
		"Name: " + name + "\n" +
		"Email: " + email + "\n" +
		"Message: " + message

	sent := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", senderEmail, senderPass, "smtp.gmail.com"),
		senderEmail, []string{recieverEmail}, []byte(msg))

	if sent != nil {
		log.Printf("smtp error: %s", sent)
	}

}

func newBlogPost(w http.ResponseWriter, req *http.Request) {
	author := req.FormValue("author")
	title := req.FormValue("title")
	body := req.FormValue("body")
	file, handler, err := req.FormFile("image")
	data, err := ioutil.ReadAll(file)
	pic := handler.Filename
	pic = strings.Replace(pic, " ", "", -1)
	if pic != "" {
		datafile := bytes.NewReader(data[:])
		buff := []io.Reader{datafile}
		combined := io.MultiReader(buff...)
		// Authentication is provided by the gcloud tool when running locally, and
		// by the associated service account when running on Compute Engine.
		client, err := google.DefaultClient(context.Background(), scope)
		if err != nil {
			log.Fatalf("Unable to get default client: %v", err)
		}
		service, err := storage.New(client)
		if err != nil {
			log.Fatalf("Unable to create storage service: %v", err)
		}

		// Insert an object into a bucket.
		object := &storage.Object{Name: pic}

		if res, err := service.Objects.Insert("uwat-163714.appspot.com", object).Media(combined).Do(); err == nil {
			log.Printf("Created object %v at location %v\n\n", res.Name, res.SelfLink)
		} else {
			fatalf(service, "Objects.Insert failed: %v", err)
		}
	}
	sID, err := uuid.NewV4()
	if err != nil {
		fmt.Printf("Something went wrong: %s", err)
		return
	}

	blog := &Blog{
		Author:  author,
		Title:   title,
		Image:   pic,
		Body:    body,
		Created: time.Now(),
		Id:      sID.String(),
	}

	key := datastore.IncompleteKey("BlogPosts", nil)
	log.Println(key)

	it, err := client.Put(ctx, key, blog)
	if err != nil {
		log.Fatalf("Error fetching next task: %v", err)
	}
	log.Println(it.ID)
	w.Write([]byte("done"))

}

func getBlogPost(w http.ResponseWriter, req *http.Request) {
	var posts []Blog
	query := datastore.NewQuery("BlogPosts").Order("created")
	client.GetAll(ctx, query, &posts)
	list, err := json.Marshal(posts)
	if err != nil {
		log.Println(err)
	}
	w.Write([]byte(list))
}

func addGallery(w http.ResponseWriter, req *http.Request) {
	gallery := req.FormValue("gallery")
	file, handler, err := req.FormFile("image")
	data, err := ioutil.ReadAll(file)
	pic := handler.Filename
	if pic != "" {
		pic = strings.Replace(pic, " ", "", -1)
		datafile := bytes.NewReader(data[:])
		buff := []io.Reader{datafile}
		combined := io.MultiReader(buff...)
		// Authentication is provided by the gcloud tool when running locally, and
		// by the associated service account when running on Compute Engine.
		client, err := google.DefaultClient(context.Background(), scope)
		if err != nil {
			log.Fatalf("Unable to get default client: %v", err)
		}
		service, err := storage.New(client)
		if err != nil {
			log.Fatalf("Unable to create storage service: %v", err)
		}

		// Insert an object into a bucket.
		object := &storage.Object{Name: pic}

		if res, err := service.Objects.Insert("unlocking-wat.appspot.com/gallery", object).Media(combined).Do(); err == nil {
			log.Printf("Created object %v at location %v\n\n", res.Name, res.SelfLink)
		} else {
			fatalf(service, "Objects.Insert failed: %v", err)
		}
	}

	image := &Image{
		Name:    pic,
		Gallery: gallery,
	}

	key := datastore.IncompleteKey("Images", nil)

	_, err = client.Put(ctx, key, image)
	if err != nil {
		log.Fatalf("Error fetching next task: %v", err)
	}
	w.Write([]byte("done"))
	log.Println(gallery)
}

func getGallery(w http.ResponseWriter, req *http.Request) {

	var galleryList []Gallery
	var collection []Collection

	query := datastore.NewQuery("Gallery").Order("created")
	client.GetAll(ctx, query, &galleryList)
	for i := 0; i < len(galleryList); i++ {
		var name = galleryList[i].Name
		var images []Image
		query := datastore.NewQuery("Images").Filter("gallery =", name)
		client.GetAll(ctx, query, &images)
		if len(images) > 0 {
			collection = append(collection, Collection{Gallery: name, Images: images})
		}
	}

	list, err := json.MarshalIndent(collection, "", "    ")
	if err != nil {
		log.Println(err)
	}
	w.Write([]byte(list))
}
