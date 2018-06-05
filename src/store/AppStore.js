import AppDispatcher from "../dispatcher/AppDispatcher.js";
import {AppConstants} from "../constants/AppConstants.js";
import {EventEmitter} from "events";

// var dump = [{"Name":"Gloria Saah","Email":"gloria.saah41@gmail.com","Number":"0540528818","Handle":"","Course":"WEB DEVELOPMENT","Location":"Western Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I am Gloria Saah, a level 400 student of the university of capecoast. Reading the program BEd Science with the course combination of biology and chemistry.Am a Ghanaian and I reside in takoradi .  I have been in the office of vice president for the Science and Mathematics Students Association of Ghana-UCC and I believe teachers and in fact all educationist should be well endowed with the knowledge of technology.I believe technology is a miracle from God and it is the key to the present and future development.","Created":"2017-09-25","Id":"b97ae13f-5737-47cb-83a1-8002d5e654f8"},{"Name":"Dorcas Acquah ","Email":"dorcasacquah08@gmail.com","Number":"0273795415","Handle":"@EwurasiD","Course":"WEB DEVELOPMENT","Location":"Central Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am an Agricultural Engineering Graduate. with love for computers and technology. I am deeply impressed when I see smart and beautiful code that does something I know I am yet to accomplish. These are moments when I feel that I have only touched the surface of what can be done with the use of computer. While there are many resources (online and offline)  to study coding on my own, it has been a bit challenging due to the sheer amount of information available.  By learning and coding with others at this program I'll learn how to collaborate with others to accomplish a common goal and became web developer and work with a team of professionals in a technology firm. \n","Created":"2017-09-25","Id":"647fdab4-691c-49ba-8e4d-a0375b817519"},{"Name":"Bernice Kuukua Bryan","Email":"bryanbernice.bb@gmail.com","Number":"0273602220","Handle":"@wink_27","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"\n\nI earned my Diploma in Information Technology from Ghana Technology University College.IT has always been my passion which is why I'm excited about this opportunity to gain the necessary knowledge in specific IT fields and better my understanding, increasing my rate of success in school and even for work. ","Created":"2017-09-27","Id":"2c3d31ab-581b-4290-8767-eff9e18ce8ec"},{"Name":"edna Yayira ohui Agbozo ","Email":"ednaagbozo@gmail.com","Number":"0505066047","Handle":"none","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I want to join this program because it very educative and its helping my generation to fit ,make use of what learnt to better themselves and solve global issues ","Created":"2017-10-05","Id":"5abdbe7a-7ff0-44eb-80bf-a958d9a29fc8"},{"Name":"Dorcas","Email":"Acquah","Number":"0273795415","Handle":"@EwurasiD","Course":"WEB DEVELOPMENT","Location":"Central Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am an Agricultural Engineering Graduate with love for computers and technology. I am deeply impressed when I see smart and beautiful code that does something I know I am yet to accomplish. These are moments when I feel that I have only touched the surface of what can be done with the use of computer. While there are many resources (online and offline)  to study coding on my own, it has been a bit challenging due to the sheer amount of information available.  By learning and coding with others at this program I'll learn how to collaborate with others to accomplish a common goal and become a web developer and work with a team of professionals in a technology firm. .","Created":"2017-10-05","Id":"f53d26dc-8b39-43b7-8a5f-2548a705b682"},{"Name":"","Email":"","Number":"","Handle":"","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a lady of 25 years of currently havingmy National servicewith basic school. I love to probe more into empowering women due o my passion for it. Taking it up from where i ended on campus as the leader of the ladies ministry on campus.","Created":"2017-10-05","Id":"4f11df13-fa48-49d4-8108-0334bfae143f"},{"Name":"Rahmah Larry ","Email":"rahmammahajiahassanlarry@gmail.com","Number":"0554486357","Handle":"Rahmah Larry ","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a young lady with so much passion for Technology. Currently in the final year at the Accra Technical University. I always try to make things right wherever I find myself hence I am youth advocate for the sdgs and I have a strong conviction this programme is going to equip me with the necessary skills to take on the world passion. ","Created":"2017-10-05","Id":"c29b77ca-4e35-40b9-9d37-5035caa1ef00"},{"Name":"Afua Sarfoa Kantanka ","Email":"afua.sarfoa15@gmail.com","Number":"0507889902","Handle":"none","Course":"WEB DEVELOPMENT","Location":"Eastern Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"An a diploma in accounting graduate from UPSA and currently serving the national in eastern region under GES. Am interested  in learning more about technology to equip myself in other to fit into the global economy....thanks ","Created":"2017-10-05","Id":"3deb80e1-ce7d-427d-8544-ec335dad109a"},{"Name":"Ethel Makafui Midodzi","Email":"emakafui8@gmail.com","Number":"0500497860","Handle":"@MaCkay00","Course":"WEB DEVELOPMENT","Location":"Ashanti Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I'm Ethel, 22 years of age and studying geography and rural development in KNUST.. \nI do wanna join this program because of the competitiveness in the outside world and also be an inspiration to other women that they can do anything and coding isn't for men. ","Created":"2017-10-06","Id":"3bf1b7e6-bc0a-4427-b8ac-ce567a50ff38"},{"Name":"Queen Frimpong","Email":"frimpqueen@gmail.com","Number":"0557484957","Handle":"No twitter handle","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Email","About":"I'm a tech enthusiast who believes women could bring their 'empathetic' nature into the 'world of code' and solve problems beyond men's scope. I'm a firm believer in technology being the driving force of our future. I am a Christian who is addicted to the Word of God and will like to see how i can further take the Gospel of our Lord Jesus through technology to greater heights.","Created":"2017-10-06","Id":"55dad41d-3374-49fa-8123-aa588b950e4b"},{"Name":"Stephanie Omolu","Email":"stephanie.omolu@meltwater.org","Number":"223201415043","Handle":"@iamomolu","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Other","About":"I want to join this program because I am working to develop myself as a product manager and I need this to help  me get there. I am also interested in videography and editing so I can I do both at the same time?","Created":"2017-10-06","Id":"ba1096d1-eaf5-491f-bc0c-95b618c020ac"},{"Name":"Rukmini Adjetey ","Email":"yesuba95@gmail.com","Number":"0543736111","Handle":"Rukmini Adjetey ","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Email","About":"I  have the passion to learn how to design by myself. ","Created":"2017-10-06","Id":"4f55ff52-4a15-4465-a2b0-1cdd350d176f"},{"Name":"Doreen Esinam Akosua Ntumy","Email":" ntumydoreen@gmail.com ","Number":"0268600033","Handle":"_deanclark","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"My Name is Doreen Ntumy. A computer science student. I would like o join UWAT because UWAT help women harness technology to unlock new skills \u0026\ndevelop existing ones so they can improve career prospects \u0026\naccess more opportunities \u0026 that's exactly what I want to do. I want to be able to use technology to impact my society and bring about a positive change. I want to be able to create an app that would meet a need in the society.","Created":"2017-10-07","Id":"aa5e7396-51d8-4048-9bf4-a998eb178cce"},{"Name":"Harriet Wovenu ","Email":"harrietwovenu@gmail.com","Number":"541845258","Handle":"","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"Am Harriet Wovenu a graduate from Pentecost  university offered Management information system and am much interested in IT and willing want to become a developer in order to manage my own business and help people who have passion in IT.  l want to join this program in order to develop my own web site which can help solve some of the problems that businesses are facing.","Created":"2017-10-07","Id":"3185f038-f3b4-4d11-8f30-2593831b4e77"},{"Name":"Otchere Vanessa ","Email":"ephyanessa@gmail.com","Number":"0273430538","Handle":"@real_veenessy ","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Will like to learn programming to help solve societal issues especially in the health and transport industry","Created":"2017-10-09","Id":"8617c297-c8e5-4752-93cd-83904eee6a65"},{"Name":"","Email":"","Number":"247697187","Handle":"@Klicksman","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"SHS","Referral":"Email","About":"i must be part because, i have passion for coding and i need your assistance to start building my tech world. thanks","Created":"2017-10-09","Id":"a680e743-e514-4c94-a31e-cddacc732cbc"},{"Name":"Cynthia Owusu","Email":"cfowusu23@yahoo.com","Number":"0245896641","Handle":"Ceeowusu","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"My name is Cynthia Owusu,a graduate from the university of ghana with bachelor of science in computer science and Statistics. I had my national service with students loan trust fund as a developer assistant. From there I joined HudsonPrice Data Solutions limited, a credit reference bureau as a Database Analyst. I corrected the data that was submitted by the financial institutions before feeding it into the main database.\nCurrently,I work with Bayport Financial Services as a credit risk officer and a Database Analyst. I have automated most of their excel procedures by using sql to store the large data and using asp.net to create simple USER interfaces.\nI love to program unfortunately I get stuck mostly and it  takes sometimes weeks to resolve some errors or bugs. I would therefore be glad to be part of a larger community where I can easily get help.","Created":"2017-10-09","Id":"471d4efb-0eb0-4046-b91b-940478fdf68b"},{"Name":"Tetteh Patience Claudia","Email":" ms.tetteh01@gmail.com","Number":"0547957859","Handle":"","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am an honest, self-motivated individual who seeks to acquire skills that will help empower others especially women. This, I believe, will help alleviate poverty in Ghana and Africa as a whole.\nMy aim, of joining this program, is to improve my knowledge in the use of technology.","Created":"2017-10-10","Id":"6852ac9a-e4f3-4724-a871-609ef86e6720"},{"Name":"David Ohene-Asante","Email":"davohene@yahoo.com","Number":"0246332994","Handle":"@davohene","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"Grassroot Hub - Brong Ahafo","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Hub","About":"David is a social entrepreneur  and a youth philanthropist, working to improve and developed the talent of young persons in some communities in Ghana. I am also a professional  Graphic designer and a finance person. \n\nOver the years, I have been working with the Grassroot Hub (Phinklife Institute)-Kenyasi in the Brong-Ahafo Region in creating, impacting and harnessing the talents of young people in the community in achieving their dreams.","Created":"2017-10-10","Id":"a3383d98-1da8-4f2b-a055-ed6242399671"},{"Name":"Aborgah mary","Email":"MaryAborgah5@gmail. com","Number":"0541220209","Handle":"","Course":"VIDEOGRAPHY AND EDITING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Mary Aborgah is my name a student of UHAS actually l really want to know more and learn about technology since now we are in computer era .l would like to be part of this activity in order to improve upon my ICT skills","Created":"2017-10-11","Id":"85a843b6-8783-4865-9dc4-b9c4cc1c6cc0"},{"Name":"Tsey Esther Makafui ","Email":"mairhxta16@gmail.com","Number":"0506780977","Handle":"@mcqhae","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"As a 2nd year nursing student in UHAS, I am strongly of the conviction that the world is going the Tech way and this development can bring about a change in health delivery in our part of Africa. By applying for this programme, I believe that I  can be imparted with the requisite skills to be part of that change so as to better the lives of our clients.","Created":"2017-10-11","Id":"ad4ef75e-595f-43cb-b1f5-7fae8c0dab27"},{"Name":"KLU STELLA EMEFA","Email":"emefastella@gmail.com","Number":"0209029393","Handle":"@emefastel","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a young graduate and a team member of a health startup. I was introduced to coding in python at a workshop which caught my excitement. I am still learn to code almost every day and I know this intensive training will make me ready for the future ahead. I will also through this training create an enthusiasm in my fellow girlfriends to join the IT society.","Created":"2017-10-11","Id":"9ef07af1-a061-4e25-8aa0-ac8ed7c50680"},{"Name":"Agor Vivian Kehinde","Email":"agorviviankehinde.gmail.com","Number":"0245090265","Handle":"f4366637719f4cl","Course":"SOCIAL MEDIA MARKETING","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Agor Vivian Kehinde is my name,I come from a family of seven. I just completed Akasti college of education awaiting posting. I don't have a favourite thing because I do my best to adjust to any situation I find myself. I want to join this programme in order to have more knowledge about technology and how it works and I love trying news things.","Created":"2017-10-11","Id":"1ed1f481-d871-4b0a-bb95-48bef05d7a13"},{"Name":"AkLAMANU VERITY","Email":"verityakamanu@yahoo.com","Number":"0540435606","Handle":"@Aklamanu verity ","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"Am verity aklamanu from ho in the  volta region  .am 21years  old completed  Africa  and radio  Tv college and also work  with kuulfm i went to learn  and others ","Created":"2017-10-11","Id":"d3de0591-e65b-4c9f-ba6b-f6be71cd98de"},{"Name":"Irene Adinorkie Okutu ","Email":"norkieayrein5@gmail.com","Number":"0244098558","Handle":"@Norkie_Irene","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"My name is Irene Adinorkie Okutu a graduate Nurse who wants to learn web development and  integrate it with the nursing to be able to solve issues and make technology in the nursing field fun and interesting  and to also educate the public on their health using the web. I know this program will give me that opportunity. ","Created":"2017-10-11","Id":"5adffc23-fd67-43b3-ba91-2fe0dfa0ddf6"},{"Name":"Rasha Gibrill","Email":"rashagibrill@gmail.com","Number":"0200418826","Handle":"RGibrill","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I love technology and am very curious to know how it works. This opportunity will serve as a huge stepping stone for exploring that curiosity in further studies","Created":"2017-10-11","Id":"bb732b4e-4690-415b-9156-9c3721aacfaf"},{"Name":"Rachael Georgina Antwi Boasiako","Email":"smileyhugh99@gmail.com","Number":"0549671608","Handle":"smileykismet","Course":"GRAPHIC DESIGN","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I'm Rachael Georgina Antwi Boasiako. 24years of age and a student of University of Heath and Allied Science's. I'm someone who is interested in programmes aimed at encouraging women to develop self-confidence so that they take up roles in the society and I believe in the adage that says 'if you educate a woman, you educate the nation.","Created":"2017-10-11","Id":"4ede4f16-ac2b-4e5c-861d-50523687cbb0"},{"Name":"Sandra Akowan","Email":"akowansandra@gmail.com","Number":"0201905857","Handle":"sandy_akowans","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I have always wanted to come up with an idea related to technology and with this opportunity I can solve problems in my society. I love to network with people. I come from the upper east region of Ghana. I love to explore and volunteer. I lead a project called \"This Girl Can\".","Created":"2017-10-11","Id":"70d4f4fa-3aa3-4e05-9c93-2c0d9d28125d"},{"Name":"Oluwamuyiwa Deborah","Email":"oluwamuyiwa.deborah@yahoo.com","Number":"0571848368","Handle":"@cutie_debbie","Course":"VIDEOGRAPHY AND EDITING","Location":"Central Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I want to join this program so i would be empowered to do more in my line of work,as the ratio of men to women is really low because women aren't well equipped.","Created":"2017-10-11","Id":"8e5c3dfd-7308-412e-9630-07d1c5e21507"},{"Name":"Gbeti Seyram Bernice","Email":"seyramgbeti@gmail.com","Number":"0504540514","Handle":"","Course":"MOBILE APP PROGRAMMING","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I want to learn more about programming","Created":"2017-10-11","Id":"4f2b4aae-ca5d-4b88-9ba2-13fedfec2ffd"},{"Name":"Honu Elizabeth ","Email":"elizabeth.honu@gmail.com","Number":"0245592984","Handle":"None","Course":"GRAPHIC DESIGN","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I am Honu Elizabeth by name and I come from Likpe Mate in the Volta region. I completed SHS in 2007 and continued to Nyaniba Health College.  I wrote certificate 1 and until now I'm home without a job all because it is a private nursing school.  I want to join this progin order to get something doing and better my life. ","Created":"2017-10-11","Id":"fce753ed-65a2-4843-a01b-a744cf75ced2"},{"Name":"stevens Serwaa Joycelyn ","Email":"stevensjoycelyn@yahoo.com","Number":"544168433","Handle":"","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Stevens Joycelyn from sampa currently in university of health and allied sciences pursing Bachelor of public health hohoe campus.  To know more about technology and educate people on how technology can help us improve our health. thank you ","Created":"2017-10-11","Id":"12080c88-8183-4f44-a11f-6798c9f2c690"},{"Name":"","Email":"","Number":"","Handle":"","Course":"GRAPHIC DESIGN","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am a lady of 23years of age and a final year student of Akatsi College of Education \nAm the fifth born of six for my parents and always have passion for changing the world every little opportunity i have.","Created":"2017-10-11","Id":"8d5218fc-6994-4b20-964d-e4de4e8f2d61"},{"Name":"","Email":"","Number":"","Handle":"","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"","Created":"2017-10-11","Id":"980e4fa9-d62c-44f2-8aaf-4429e1995796"},{"Name":"","Email":"","Number":"","Handle":"Mimi7_GH","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I'm Miranda Adedze.I believe the world is fast developing with technological advancement. This workshop will give me great insights, skills and knowledge in website creation which is leading the global drive of quick access to information and enhancing businesses.I am highly motivated by the fact that this program is well carved to impact life long skills on participants in a short period.","Created":"2017-10-11","Id":"09567f2d-f567-4f89-ae1a-6b9e7eb1fe54"},{"Name":"HELLEN TAIWO AGOR ","Email":"hellentaiwo2012@gmail.com","Number":"233245090481","Handle":"Taiwo Agor ","Course":"GRAPHIC DESIGN","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am Hellen, and I come from a big family. \nAm in the university, and I always ask myself, 'what at all are we learning in school if we don't have the skills in in technology, in this 21st era we find ourselves '. I want to be a tool to help others with computer software manipulations, so I think your programme is an opportunity for me. Thanks ","Created":"2017-10-11","Id":"3f92e97f-d021-4ac8-8897-0bbba018e69e"},{"Name":"Bilqis Ishaq","Email":"bilishaq8@gmail.com","Number":"0576333932","Handle":"I dont have please","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a young lady of the age of 22.I recently completed the university of Ghana and currently doing my national service.I started my own clothing line in my final year in school.\nI majored in information studies,which has an IT aspect and we studied programming and telecommunications, but its was highly theory.I would like to join this program to get more equipped with the practical aspect,because of my love for IT.and also like to train other girls in my community (zongo)who usually lack IT skills.\nThank you.","Created":"2017-10-11","Id":"7461ebcc-6308-456c-ad20-6e90fde099e8"},{"Name":"Aklamanu verity","Email":"verityaklamanu@yahoo. com","Number":"0540435606","Handle":"@Aklamanu verity","Course":"SOCIAL MEDIA MARKETING","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"Verity Aklamanu is my name I come from ho in the Volta region and also completed African Radio And Tv.College .Am 21 years old the reason why I went to join this technology group is that the world is more and more about technology. So I verity went to learn and to acquire more knowledege , so I will also teach others","Created":"2017-10-11","Id":"f7e221a7-2849-434c-a6ef-a46c5670a19f"},{"Name":"Elvisa Prempeh","Email":"ellevesa@gmail.com","Number":"0540384030","Handle":"@ElleVisa","Course":"GRAPHIC DESIGN","Location":"Volta Region","Hub":"none","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I  am a final year student studying midwifery in the university of Health and Allied sciences. I have interests in reading, writing, computers and technology. A few weeks ago,I participated in an event called django girls ho which opened my eyes to endless opportunities in the field of technology.I  am looking for more ways to improve myself and make the best out of that experience and that is why I want to join this program.To simply become better","Created":"2017-10-11","Id":"1a91ff25-45ab-4fa2-a5ab-37f33907393b"},{"Name":"Sandra Akowan","Email":"akowansandra@gmail.com","Number":"233201905857","Handle":"@sandy_akowans","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I come from the Upper East Region of Ghana. I am a fellow at the African Internship Academy, studied BPOs, Microsoft Office and soft skills at the British council Ghana, a past volunteer at International Service.I love to explore, network, volunteer and I see my self as a beacon of hope for my fellow girls up in the north. I have always wanted to solve problems in my society using technology but I did not know how and now I have this opportunity to learn. I will use the skills I will learn to make an impact in my society and also my upcoming enterprise.","Created":"2017-10-12","Id":"e4854756-22b9-4478-b859-3f114b53893a"},{"Name":"Grace Adjoa Nkum","Email":"Maaadjoa21@gmail.com","Number":"0249067845","Handle":"I don't have one","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I am Grace, I understand the world has got to stage where everything is done by technology, in as much as my profession is not about IT I believe IT influences it in one way or the other. \nThis I want to be conversant with It. ","Created":"2017-10-12","Id":"5cb5f940-2ced-4893-8915-ebbda51642c7"},{"Name":"Elvisa Prempeh","Email":"ellevesa@gmail.com","Number":"540384030","Handle":"@ElleVisa","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a final year student of the university of health and Allied sciences in Ho. I  have interests in reading, writing and computers.A few weeks ago,I participated in a workshop training called Django girls ho where we were provided with basic training in programming. The event opened my eyes to a whole lot of opportunities and the reason why I want to join this program is to improve myself and become better","Created":"2017-10-12","Id":"c06d6cf1-e0ed-4c69-a8a3-b7626b8324ba"},{"Name":"Richard Tsibu","Email":"tsiburichard1@Yahoo.com","Number":"0547936086","Handle":"indomietsibu@twitter.com","Course":"SOCIAL MEDIA MARKETING","Location":"Central Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"So that I can exhibit my talent and educate others","Created":"2017-10-12","Id":"c8c7063c-57cd-4ec1-abee-70e2d048f841"},{"Name":"EUNICE AMI YAYRA DZOTSI","Email":"euniceyayra3@gmail.com","Number":"0543420133","Handle":"@Euniceyayra3","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Other","About":"Am a passionate young lady who is optimistic and sees every opportunity as a learning ground and am a team player as well as impacting others with what i know.i want to join this program because i lack skills in the feild so want to learn and develop myself in the courses offered in order to impact others.","Created":"2017-10-13","Id":"5803d547-e540-4ffc-8a44-715dcd0834af"},{"Name":"Jennifer Ayeley Danklu","Email":"ja.danklu@yahoo.com","Number":"0249023064","Handle":"ayeley","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"OTHER","Referral":"Social Media","About":"I am Jennifer Ayeley Danklu, 27years of age and a Food Science and Technology graduate from KNUST. I am currently working with HPW FRESH AND DRY LTD as a QUALITY ASSURANCE OFFICER. I work with the Technical team of my church, doing projection and managing the sound. I believe in being versatile and the ability to use technology to achieve alot of things.","Created":"2017-10-13","Id":"83bb9853-33e1-470e-830c-147bade5da7b"},{"Name":"Michael Kweku Tawiah","Email":"abofo64@gmail. com","Number":"246677971","Handle":"null","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"SHS","Referral":"Social Media","About":"","Created":"2017-10-13","Id":"b75f70fb-0ff6-43dc-bb40-c27378f19a09"},{"Name":"","Email":"","Number":"","Handle":"","Course":"VIDEOGRAPHY AND EDITING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"am Rachael and in my tertiary level i believe this is the best opportunity to develop myself ","Created":"2017-10-13","Id":"5771cd36-6e97-491b-9011-74f618966032"},{"Name":"Janaat Nkansah","Email":"Janabunkansah@gmail.com ","Number":"0243401957","Handle":"none","Course":"GRAPHIC DESIGN","Location":"Ashanti Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"am looking to be self employed and to be able to help others too","Created":"2017-10-14","Id":"020ac228-1cea-48ea-9a31-d718a629f6cf"},{"Name":"Elorm Esi Tagbor","Email":"elorm.t@live.com","Number":"0205794159","Handle":"@esi_tag","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I completed a BSc. in Electrical/Electronic Engineering in July this year. I am looking for opportunities to build important skills especially in web development. I see the importance in being multi-faceted with regards to relevant skills in a dynamic, fast-advancing(due to technology) world.\nTo be able to give back to Ghana and help empower women, I need to gain knowledge and acquire these skills. I am taking this course because I want to  do my part for Ghanaian women.","Created":"2017-10-14","Id":"78196b2d-ee3f-4547-ae0b-2caa84bfe8cd"},{"Name":"Adiza Abdul-Rafiu Mohammed ","Email":"kezmimohammed@gmail.com","Number":"0240158662","Handle":"Mhyz Mohammed ","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a member of this years group and I was taught web development. It was very helpful to me \nBecause of that I want to learn something new that will help my field of study\nCurrently am a marketing student in the university. ","Created":"2017-10-15","Id":"ca9cf8ab-5501-408a-b66f-0c48db105799"},{"Name":"Samira Ibrahim","Email":"imira631@gmail.com","Number":"0245168872","Handle":"I don't have one","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Beyond my name, My social status and education, i am just a girl who loves to make mistakes and learn from them. I am trying my best to find myself within and to know what i really want to do and this is one of the opportunities. I believe so much in learning because it will help me grow both personally and professionally, to be able to developed a better framework for recovery.","Created":"2017-10-15","Id":"8b5a6db3-c86a-4b32-9778-4a10ebfe691e"},{"Name":"ERICA OPOKU","Email":"opokuerica14@gmail.com","Number":"0247074436","Handle":"none","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"My name is Erica Opoku, a 24 year old lady. I completed Kwame Nkrumah University of Science and Technology with a Bsc. in Human Settlement Planning. I am a dream of becoming an urban designer and a lawyer on land issues as a part-time job. I hope this organization would help me achieve my dream and goal. I plead that the organization would also offer their best for the fulfillment of my dream. Thank you.","Created":"2017-10-15","Id":"481ebe8a-cc18-47e9-ac80-edbf29c6bb95"},{"Name":"Eric Asare Annoh","Email":"ericannoh@gmail.com","Number":"0242683500","Handle":"Asare_Annoh","Course":"WEB DEVELOPMENT","Location":"Ashanti Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"Am Eric and I Love been with computers and i really want to study and know about them.","Created":"2017-10-16","Id":"e7014052-a7a7-45e1-9930-0f191afe3b45"},{"Name":"Ekellah Leviel Anthelem","Email":"anthelem.ekellah@gmail.com","Number":"0200331572","Handle":"Ekellah Leviel Anthelem","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I am a self-motivated young man and driven individual who likes to work on challenging job. Ambitious and ready to try new things which would be helpful for my career. \nBy joining this training, I aimed to be equipped and empowered with basic technology tools to build a sustainable technology business \n","Created":"2017-10-16","Id":"fd4eb5ee-c0db-4b7c-a301-811afc18dfb3"},{"Name":"Sylvia Annang-Mensah","Email":"nanaoseiwah@gmail.com","Number":"0502080532","Handle":"@Cylvi_Ann","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am a Graphic Designer who is not only determined to make it but to be a role model to the younger ones in the field of technology which is believed to be dominated by men. I believe in broadening my knowledge about technology because i believe knowledge in this world is the only thing that grows when shared. ","Created":"2017-10-18","Id":"22f41991-7b9b-44be-89e7-967dc7cb4d71"},{"Name":"Francisca Jellicoe","Email":"fjellicoe@hotmail.com","Number":"0504253064","Handle":"Cheskra@gmail.com","Course":"WEB DEVELOPMENT","Location":"Western Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am a feminist and I aspire to empower women and girls to be mentally and psychologically strong,bold and self dependent irrespective of the circumstances surrounding them.","Created":"2017-10-18","Id":"1753e72b-8071-44ab-9320-81e834f0bd06"},{"Name":"Stephanie Dawsonn -  Andoh","Email":"sbdawsonn-andoh@st.ug.edu.gh","Number":"0242432976","Handle":"@AndohStephanie","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"My name is Stephanie,  i was briefly introduced to python about 2 years ago.  I wish to learn this programming language extensively as well as other languages such as C++ and Java. I read introduction to computer science 1 \u0026 2 I'm level 100 and had a C+ and an A respectively. I am currently in level 200 and no longer reads computer science.  I find it a difficult task to learn codes on my own.  I believe and trust that I will find a better and more conducive environment at Ispace.gh to gain knowledge in tech innovations. ","Created":"2017-10-18","Id":"5e1edb72-5b92-4040-bf27-6a856bb131f5"},{"Name":"yes","Email":"yes@m.com","Number":"223232323232","Handle":"@wantedsuley","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"lkasmkasdamskmdaksmk","Created":"2017-10-18","Id":"2c6028f4-fe06-4f30-b9a5-4f4b379d1c1d"},{"Name":"Amegbedzi Rosemary Ami","Email":"rosemaryamegbedzi@gmail.com","Number":"0544994711","Handle":"@rosemaryamegbe1","Course":"VIDEOGRAPHY AND EDITING","Location":"Volta Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am a student of University of health and Allied sciences.Am offering health promotion and in level 300.\nI want to join because get an upper hand in technology and help other females to be good in technology ","Created":"2017-10-19","Id":"396f1dd4-cf46-4f61-968c-de0e8b7e70cb"},{"Name":"Adwoa Adu Gyamaah","Email":"gyamaaha@gmail.com","Number":"0509822222","Handle":"@adwoa1000","Course":"WEB DEVELOPMENT","Location":"Brong-Ahafo Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I’m hardworking, confident and an innovative young woman with the drive to excel, learn new skills and develop techniques in technologies. I am a highly motivated team player with good interpersonal and communication skills. I would want to join this program because as a woman, i have always wanted to empower myself and achieve my goals.","Created":"2017-10-19","Id":"c6695a7d-5c27-452d-bfef-b6f292e37576"},{"Name":"Jessica Sedem Tisanjoh","Email":"sedemglory@gmail.com","Number":"0244934333","Handle":"@PleromaJessica","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a Technopreneur trained at the Meltwater Entrepreneurial School of Technology. I have a special interest in disrupting the advertising and marketing sector in Africa. ","Created":"2017-10-19","Id":"c1dc5295-293d-4dd7-9c28-34d93401e749"},{"Name":"Yin Susana ","Email":"yinsuzy123@gmail.com","Number":"0245046423","Handle":"Susanayin 1","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am Yin Susana a graduate from the university for development studies with a bachelors degree in earth science,i have a passion for technology and joining this program will help bring out my skills.","Created":"2017-10-20","Id":"43b0f977-5c8c-4062-9b1a-dc8ebb54580e"},{"Name":"MENKAH OFORI OBED","Email":"","Number":"","Handle":"","Course":"WEB DEVELOPMENT","Location":"Upper East Region","Hub":"None","Age":"30-38","Education":"OTHER","Referral":"Other","About":"I listened to you on city FM and I got touched by your operations. I want to venture into a groundnut past production locally and expand into exportation in the future. I will need the web site to brand the product. ","Created":"2017-10-20","Id":"1d095589-8c31-4aec-a9d8-9a88b21535c8"},{"Name":"","Email":"","Number":"","Handle":"","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"My name is Shaibu Ajara Telatah, I am 37of age and completed my 1st degree in Management Studies awaiting result.  I wish to join this program to acquire more techonogical skills in  development women so that I also help to development other women who needs this skills in my community.","Created":"2017-10-20","Id":"efc3ce29-4ea4-4847-8e4c-44f6cc34b1bb"},{"Name":"Josephine Oduro Boateng ","Email":"odurowa2000@yahoo.com ","Number":"0243937996","Handle":"Josephine Oduro Boateng ","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Presently a Public servant but want to do African clothing n accessories online business ","Created":"2017-10-20","Id":"0142c0cd-1260-459d-8865-ef91fb60de8c"},{"Name":"JOY SENA ANKU","Email":"janku850@gmail.com","Number":"0265274478","Handle":"@jsanku850","Course":"WEB DEVELOPMENT","Location":"Western Region","Hub":"None","Age":"30-38","Education":"OTHER","Referral":"Other","About":"I am a young career woman in my mid-thirties, working in the warehousing department of  a very reputable company in the cocoa industry.However,I have a strong desire for  communication and advertising. Thus, aside my regular job, I am assiduously taking up relevant courses in  that area. Again, I love new challenges and my greatest  aim in life now is to be ICT Literate. I reckon that the illiterate of the 21st century are not only people who are unwilling to learn and unlearn but also, people lacking computer skills. Enrolling on this programme will therefore be a dream come true! the skills acquired will not only enhanced my life but also all the younger people around me that i love so much to impact. Thank you\n","Created":"2017-10-20","Id":"fd79c347-74fa-4bca-9cd3-ca850108173d"},{"Name":"Pearlvis","Email":"pearlvistornu@yahoo.com","Number":"0543864270","Handle":"Pearlvis_cephi","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a people person and enjoy my work as an executive assistant. It gives me the opportunity to assist management level staff with in depth experience and expertise to achieve corporate goals and i get the opportunity to learn from them directly. When i am not working, i usually listen to good soul music. I am very much a kid at heart, love to cook, watch football and play video games. I love meeting people and learning new things. With the fast growing pace of technology all around the globe - I will be thrilled and truly fulfilled to be a beneficiary of ISpace upcoming project of unlocking Women and Technology. \nAt this stage of my life i am indecisive as to what my next move is. I have too many dreams and passion and choosing one feels like giving up on another.  But what if i could venture into a new field which will improve my skills and abilities and help me along my career path. Listening to you guys on citi fm gave me the answer that i could get additional skills by picking up some coding skills which in the long term keeps me at pace with meeting the new technological age requirements. I was so marveled at the great and amazing things you guys are doing and there is no place i would rather want to be. Keep up the great work guys!","Created":"2017-10-20","Id":"ee940c6a-f747-47a6-9328-e4db2c432b6a"},{"Name":"Mariam Mohammed-Idriss","Email":"Mariamidriss32@gmail.com","Number":"0243660183","Handle":"@Mdzata","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"OTHER","Referral":"Social Media","About":"I am a mother of two who works in the banking industry but have a passion to develop my own business. I've nurtured a business idea for about 10 years now but have not got the means to do it. This course will provide that opportunity to develop that business and also to provide the total experience for me to see the idea transform to reality.","Created":"2017-10-20","Id":"c9d5c437-1bfe-41be-967d-cb25176436b9"},{"Name":"Pearlvis Sefakor Tornu","Email":"pearlvistornu@yahoo.com","Number":"0543864270","Handle":"Pearlvis_cephi","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Other","About":"I am a huge people person and currently work as an Executive Assistant.\n\nBut what if it didn’t have to be that way? Sure, you’ll always have to make decisions, but what if it didn’t have to be so black and white? What if you could do 3 things you love rather than 1, or what if you could decide to kindle your passion AND make the big bucks?\n\nLaurence Bradford gets it. Like many of us she was trying to puzzle together her education, her dreams, and the logistics of making rent into a career path that makes sense. The answer she came up with is seriously inspiring, and, as you might have guessed, it involved picking up some pretty snazzy coding skills.","Created":"2017-10-20","Id":"051d453e-bd9b-47c4-9279-3257e0ea4ae2"},{"Name":"DOREEN OSAFO ACHEAMPONG","Email":"osafodoreen@gmail.com","Number":"0546394685","Handle":"@achie2reen","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a young adult, a firm believer in education and currently doing my national service. I completed University of Education,  Winneba where I studied B.E.D Geography and Political Science. \n I would want to join because I love learning beyond my scope as well as technologically advance myself.\n","Created":"2017-10-21","Id":"a8285c28-ab35-45aa-945e-adccd70c6d90"},{"Name":"Christopher ","Email":"kukuu700@gmail.com","Number":"0200729293","Handle":"no","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Hi, my name is Christopher I live in madina a young man of twenty-seven year  I want to join this special program to acquire knowledge to my self and also  educate my  society and inform    others who are interested about    the on going training in Accra.","Created":"2017-10-21","Id":"b14180df-5c72-4611-9403-9b460ee11941"},{"Name":"Hayford-Abban Ewurefua","Email":"ewurefuahayford@gmail.com","Number":"0506513861","Handle":"none","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I'm a girl who likes to try new stuff out and quite curious about certain things .. I am very sociable and outspoken and Always make sure I make the best out of every opportunity I come across therefore I want to join this program in other to add more value to myself and take advantage of the training I'll receive to benefit others positively. ","Created":"2017-10-22","Id":"11b95aa9-4787-4188-b8a1-68e5e5c2fed6"},{"Name":"Esther Owusu-Dankwah","Email":"owusudankwahe @gmail.com","Number":"248926305","Handle":"Air_sta","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Other","About":"I am an open and hardworking person ,who seeks to learn new things to enhance my skill and knowledge and also open up new career opportunities  for me.","Created":"2017-10-23","Id":"6255b37c-799c-45f3-afab-2e51aec4703e"},{"Name":"Dzifa Dogbe","Email":"dogbedzifa@yahoo.com","Number":"0242253719","Handle":"@adi_sheiwo","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I am a lady who loves technology and marketing.i  believe the future is all about technology and we need to brace ourselves with all techniques to make us thrive in that age. I want to join this program because, I need to know the secrets about social media marketing,how to be successful at it and how to build a brand on social media because I wish to start business soon.","Created":"2017-10-23","Id":"5e5a5393-13b8-4a54-8611-cd2e6d75f424"},{"Name":"Augustina AWUYE-KPOBI ","Email":"elinam.doe@gmail.com ","Number":"0244627750","Handle":"Ok","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"Am a lady of 32 and a first degree holder am wants to learn wants to learn social media marketing ","Created":"2017-10-23","Id":"d98cb17f-d0af-42cb-8a88-381a4b0f8040"},{"Name":"Adzivor Rejoice Sefakor ","Email":"wiznuella@gmail.com","Number":"0241823485","Handle":"@Sephakor 1","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"Am an ambitious lady who wants to make an impact in my society.. ","Created":"2017-10-23","Id":"de50a677-c96f-43f3-b034-d4705757df13"},{"Name":"Aklamanu verity ","Email":"Verityaklamanu@yahoo.com","Number":"0540435606","Handle":"@Aklamanu verity ","Course":"SOCIAL MEDIA MARKETING","Location":"Volta Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":" I’m Aklamanu Verity from Volta region Ho, 4”9 tall \nLove watching news, reading novels, helping my friends, families and others \nBecause I want to learn more and to get more knowledge and skills ","Created":"2017-10-24","Id":"f3f621d6-9879-43d6-9f95-b2a25b8cf9af"},{"Name":"ADRIENNE MIREKUA FREMPONG","Email":"nanaama407@gmail.com","Number":"05448515044","Handle":"Don’t have","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I am a 24 year old Diploma Student At the Ghana institute of Journalism.\nIt’s my desire to have a career in Public Relation and I feel that social media as a tool can go a long way to help my craft.\nCurrently I have started a small business on campus.\nI sell Sobolo(Bisap juice )and it is mostly to my friends and mates around campus .\nI use WhatsApp to market the products and also paid someone to design a logo which I can use for advertisement and branding .\nThis in a way has improved my sales .. since I can collectively broadcast the product to more people using this Tool.\nI feel learning more about social media Marketing could go a long way to boost my entrepreneurial ambitions.\nI found that there are more social media platforms out there. And with the opportunity you are providing I could learn  more productive ways to market my product to reach a wider market and attract huge customers.\nI have seen companies sell and market their products online and though it is a bit far streatched from what I have going on now . With your help in Social media Marketing I can do more for myself and Others .","Created":"2017-10-24","Id":"3c2cc82f-1014-4ba3-abb8-9fb1be2f7c7e"},{"Name":"Angela Mansah","Email":"kukuu700@gmail.com","Number":"0541711265","Handle":"no","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"Hi  my name is angela mensah a young lady of 24 I live in madina. A graduate of Abure secondary school, l want to join this special initiative to acquire knowledge to my self and  educate other young ladies  who are interested to  improve  they're educational  level to add upon  the work force at work and the society as a hole.","Created":"2017-10-25","Id":"66e2ce52-5dc2-475f-bed4-7b721785b1da"},{"Name":"Angel Deladem Buadi ","Email":"angelbuadigh@gmail.com","Number":"0246288842","Handle":"www.unlockingwat.com","Course":"WEB DEVELOPMENT","Location":"Volta Region","Hub":"None","Age":"30-38","Education":"OTHER","Referral":"Social Media","About":"Am Angel Buadi I am a journalist by profession but currently a typist with a Senior High Technical School I want to be enlightened as far as this program is in session in technology and be bold to do things by myself.","Created":"2017-10-25","Id":"46067531-f508-4359-b801-e1113fa40151"},{"Name":"Kipo Attawa Rebecca","Email":"attawa.rebecca@gmail.com","Number":"542497035","Handle":"","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"My name is Kipo Attawa Rebecca from the northern region of Ghana. I am a graduate of the university of health and allied sciences. I read nutrition and dietetics in school. I am into bead making as well. \nAs a young lady who aspires to be a successful entrepreneur, this program will equip me with the needed technology to take my business to the next level. I will be able to able to Market my goods to a larger population.","Created":"2017-10-25","Id":"d9f96e83-4d4c-4b06-9882-cc0e230a3884"},{"Name":"Abigail Pinto","Email":"abigailpnt@gmail.com","Number":"0554078066","Handle":"@smarty_pinto","Course":"MOBILE APP PROGRAMMING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I'm a 21 year old university of Ghana student, studying information technology with the ambition of becoming a software developer. I hope by joining this prestigious group I get to learn more in all aspects of life and meet with great mentors. ","Created":"2017-10-26","Id":"595f82fe-40f9-4049-aaf5-baedad88a998"},{"Name":"Barbara Joelle Wahi","Email":"joellewa@yahoo.com","Number":"0242239533","Handle":"Not applicable","Course":"WEB DEVELOPMENT","Location":"Western Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am an aspiring entrepreneur in the beauty industry. Doing a successful business in Ghana requires a good amount of knowledge in technology. Joining this program will give me the opportunity to develop my skills in web development to grow my business and support others to do so.","Created":"2017-10-27","Id":"395b14ed-06b0-437c-9028-e331bc14f936"},{"Name":"CYNTHIA","Email":"ladycingirl@yahoo.com","Number":"0277316671","Handle":"cynthia oblitey","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am student and a worker. i want to enhance my knowledge in  technology.","Created":"2017-10-27","Id":"62727c52-f6bf-4025-a017-aac54c00e9ae"},{"Name":"Esther Kotey","Email":"eskete122@gmail.com","Number":"0574183500","Handle":"@korkorkotey","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am very passionate about developing my technical skills further in areas which will enable enhance my career as a telecommunications engineer. I desire knowledge in the web design field and will like to join the course.","Created":"2017-10-28","Id":"ba8edd80-ab89-4aab-8170-4cfd33a75f9a"},{"Name":"Evita Joseph Asare","Email":"evita@evitajoseph.com","Number":"00233544680080","Handle":"@eviasare","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"30-38","Education":"OTHER","Referral":"Social Media","About":"I’m the Business Manager for thriving beauty brand called Evita Joseph . Social media is where we get to meet a lot of our potential clients . I want to learn to do it rightly and that’s why I want to be part of this course. ","Created":"2017-10-29","Id":"2977fdd5-2be4-42f5-8e7a-d3cf2f41e7f8"},{"Name":"test","Email":"test@v.com","Number":"202002002","Handle":"@wantedsuley","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"test","Created":"2017-11-01","Id":"da9de620-4e50-4e95-842d-33c6a08a5013"},{"Name":"Agnes Aketsu Atsoma","Email":"princessnissie@gmail.com","Number":"0247530586","Handle":"none","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Other","About":"I am a young lady and a self motivated type.I have passion to be self-employe preferably to provide nutritious smoothies,salad,sandwich,wraps and other catering services in a professional way since I already have the training.Its a dream come true to apply for Unlocking ","Created":"2017-11-01","Id":"0a0ddb2e-5688-42da-a8ad-6da1e02cc13a"},{"Name":"Gifty Mintaa Quarshie","Email":"giftyquarshie303@gmail.com","Number":"0547777206","Handle":"@GiftyQuarshie95","Course":"SOCIAL MEDIA MARKETING","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I am a 22 years old lady, having a professional diploma in IT from the Ghana Institute of Management and Public Administration and currently undertaking a degree in Public Administration from same institution.I have the  passion to use today's technology to solve societal problems and push for its advancement. I love to learn new skills and aquire more knowledge in my field of work for a greater impact. ","Created":"2017-11-02","Id":"3d435ace-8cf4-4bb5-b237-326f2048e131"},{"Name":"JULIET","Email":"dear@gmail.com","Number":"0545031834","Handle":"hfdhddj","Course":"MOBILE APP PROGRAMMING","Location":"Ashanti Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"am a girl who is determined to learn","Created":"2017-11-02","Id":"7e8d6f7b-9aa3-4168-8348-dccb4377f89d"},{"Name":"JEMINAH ASAAH","Email":"asaahjeminah@hotmail.com","Number":"0504704956","Handle":"N/A","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Social Media","About":"I enjoy learning new things and having a positive impact on my society. I am passionate about developing things to help solve problems .I want to join this program so that i can develop the skills in programming.","Created":"2017-11-03","Id":"6912e560-60b3-4667-af96-a4d9ee11ff52"},{"Name":"Blessing Elikem Narh","Email":"blessing.elikem@gmail.com","Number":"0209853013","Handle":"@belinsworld","Course":"GRAPHIC DESIGN","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Friend","About":"I'm Eli, i love to be in the IT world and i want to affect the world in one way or the other with my IT skills. I wish am granted the opportunity to be part of the IT generation. Thank you.","Created":"2017-11-03","Id":"d0f9ef2f-44c1-4ad5-8113-d293f0b3f34a"},{"Name":"Doreenda Nikoi Kotei ","Email":"nkdoreenda.1000@gmail.com","Number":"0503101809","Handle":"@NikoiDoreenda ","Course":"MOBILE APP PROGRAMMING","Location":"Ashanti Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I completed KNUST this year in Computer science. Im.in a team who developed the SmartBin project . \nPls visit and share our website at....\nWww.SmartBinGlobal.weebly.com \nFor more information. \nI love programming because I want to solve problems in the societies.","Created":"2017-11-04","Id":"215338b1-b9c1-4499-93e0-85b586d0adcd"},{"Name":"Ayishetu Abdullai ","Email":"ashabdullai@gmail.com","Number":"0269159558","Handle":"Aishaabdullai1","Course":"WEB DEVELOPMENT","Location":"Greater Accra Region","Hub":"None","Age":"18-30","Education":"SHS","Referral":"Social Media","About":"I have passion for technology!","Created":"2017-11-04","Id":"5b3e0996-044b-4151-bd53-494916b3f808"},{"Name":"Doreenda Nikoi Kotei ","Email":"nkdoreenda.1000@gmail.com","Number":"0503101809","Handle":"Mobile App Programming ","Course":"MOBILE APP PROGRAMMING","Location":"Brong-Ahafo Region","Hub":"None","Age":"18-30","Education":"DIPLOMA/DEGREE","Referral":"Friend","About":"I completed KNUST this year and I've come out with a prototype of my SmartBin PROJECT and it's website. I'm an expert in the area of IoT, Artificial intelligence, Machine Learning and Python Programming, Graphic design and animation.\nI love programming because I want to use that to solve societal problems. \n","Created":"2017-11-04","Id":"18956ea6-f73f-4edd-8982-16c3d4007a43"}]
var CHANGE_EVENT = "change";
var t = [
    {
        "Gallery": "January",
        "Images": [
            {
                "Name": "jan4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan9.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan8.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan7.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan6.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            },
            {
                "Name": "jan5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "January"
            }
        ]
    },
    {
        "Gallery": "February",
        "Images": [
            {
                "Name": "Feb1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb9.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb8.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb6.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb7.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            },
            {
                "Name": "Feb4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "February"
            }
        ]
    },
    {
        "Gallery": "March",
        "Images": [
            {
                "Name": "mar4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar9.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar8.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar6.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            },
            {
                "Name": "mar7.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "March"
            }
        ]
    },
    {
        "Gallery": "April",
        "Images": [
            {
                "Name": "apri6.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri9.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri8.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri7.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            }
        ]
    }, 
    {
        "Gallery": "May",
        "Images": [
            {
                "Name": "may1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "may2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri8.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "jan5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri7.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            }
        ]
    },
    {
        "Gallery": "June",
        "Images": [
            {
                "Name": "June1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "June2.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "June3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "June4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "June5.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "June6.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri3.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri1.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            },
            {
                "Name": "apri4.png",
                "Created": "0001-01-01T00:00:00Z",
                "Gallery": "April"
            }
        ]
    }

]  

var _store = {
  user: {},
  blogs: [],
  activeBlog: {},
  gallerys: t,
  activeGallery: [],
  applications: [],
  activeApplication: {},
}

class StoreClass extends EventEmitter {

	addListener(cb) {
		this.on(CHANGE_EVENT, cb)
	}

	setUser(user) {
		return _store.user = user;
	}

  logOut(user) {
    return _store.user = user;
  }

  setBlogs(data) {
    return _store.blogs = data;
  }

  setActiveBlog(data) {
    return _store.activeBlog = data;
  }

  setGallery(data) {
    return _store.gallerys = data;
  }

  setActiveGallery(data) {
    return _store.activeGallery = data;
  }

  setApplications(data) {
    return _store.applications = JSON.parse(data);
  }

  setActiveApplication(data) {
    return _store.activeApplication = data;
  }


	removeListener(cb){
		this.on(CHANGE_EVENT, cb)
	}

	getStore() {
		return _store;
	}
}

const AppStore = new StoreClass(); 


AppDispatcher.register((payload) => {
  const action = payload.action;
  switch(action.actionType) {

  	case AppConstants.SET_USER:
  		AppStore.setUser(action.data)
  		AppStore.emit(CHANGE_EVENT)
  		break;

    case AppConstants.LOG_OUT:
      AppStore.logOut(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;

    case AppConstants.SET_BLOGS:
      AppStore.setBlogs(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;

    case AppConstants.SET_ACTIVE_BLOG:
      AppStore.setActiveBlog(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;

    case AppConstants.SET_GALLERY:
      AppStore.setGallery(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;

    case AppConstants.SET_ACTIVE_GALLERY:
      AppStore.setActiveGallery(action.data)
      AppStore.emit(CHANGE_EVENT)   
      break;

    case AppConstants.SET_APPLICATIONS:
      AppStore.setApplications(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;

    case AppConstants.SET_ACTIVE_APPLICATION:

      AppStore.setActiveApplication(action.data)
      AppStore.emit(CHANGE_EVENT)
      break;


  }
  return true;
})

export default AppStore;