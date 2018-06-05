import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { AppConstants } from '../constants/AppConstants.js';
import {logInApi, addUserApi, sendMessageApi, getBlogsApi, getGallerysApi, addBlogApi, addGalleryApi, applyApi, getApplicationsApi} from "../utils/appAPI.js";

export function logIn(data) {
  logInApi(data);
}

export function logOut(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.LOG_OUT,
    data: {"LoggedIn": "false"}
  });
}

export function setUser(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_USER,
    data: data
  });
}

export function addUser(data) {
  addUserApi(data)
}

export function sendMessage(data) {
  sendMessageApi(data)
}

export function getGallerys(data) {
  getGallerysApi();
}

export function setGallerys(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_GALLERY,
    data: data
  });
}

export function activeGallery(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_ACTIVE_GALLERY,
    data: data
  });
}


export function addGallery(data) {
  addGalleryApi(data)
}

export function addBlog(data) {
  addBlogApi(data)
}

export function getBlogs(data) {
  getBlogsApi();
}

export function setBlogs(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_BLOGS,
    data: data
  });
}

export function activeBlog(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_ACTIVE_BLOG,
    data: data
  });
}

export function apply(data) {
  applyApi(data)
}

export function getApplications() {
  getApplicationsApi();
}

export function setApplications(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_APPLICATIONS,
    data: data
  });
}

export function activeApplications(data) {
  AppDispatcher.handleViewAction({
    actionType: AppConstants.SET_ACTIVE_APPLICATION,
    data: data
  });
}