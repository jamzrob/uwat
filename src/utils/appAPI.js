import $ from 'jquery';
import toastr from 'toastr';
import {setUser, setBlogs, setGallerys, setApplications} from "../actions/AppActions.js";

export function logInApi(user) { 
	$.ajax({
	    url: '/api/logIn',
	    method: "POST",
	    data: user,
	    cache: false,
	    success: function(data) {
	    	var response = JSON.parse(data);
	    	if (response.LoggedIn == "true") {
	    		location.hash = "#/dashboard/addUsers"
	      		setUser(response);
	      	}
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function addUserApi(user) {
	$.ajax({
	    url: '/api/addUser',
	    method: "POST",
	    data: user,
	    cache: false,
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this) 
	})
}

export function sendMessageApi(data) { 
	$.ajax({
	    url: '/api/sendMessage',
	    method: "POST",
	    data: data,
	    cache: false,
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
	toastr.success("Message Sent");
}

export function applyApi(data) {
	$.ajax({
	    url: '/api/apply',
	    method: "POST",
	    data: data,
	    cache: false,
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function getApplicationsApi(data) {
	$.ajax({
	    url: '/api/getApplications',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	      	setApplications(data);
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function getGallerysApi(data) {
	$.ajax({
	    url: '/api/getGallery',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	    	if (data) {
		    	var response = JSON.parse(data);
		    	if (response != "") {
			      	setGallerys(response);
			    }
			}
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}

export function addBlogApi(data) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/addBlog", true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("success")
		}else {
			console.log("error")
		}
	}
	xhr.send(data)
}

export function getBlogsApi(data) {
	$.ajax({
	    url: '/api/getBlog',
	    method: "POST",
	    cache: false,
	    success: function(data) {
	    	if (data) {
		    	var response = JSON.parse(data);
		    	if (response != "") {
			      	setBlogs(response);
			    }
			}
	    }.bind(this),
	    error: function(xhr, status, err){
	      console.log(err);
	    }.bind(this)
	})
}


export function addGalleryApi(data) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/addGallery", true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log("success")
		}else {
			console.log("error")
		}
	}
	xhr.send(data)
}

