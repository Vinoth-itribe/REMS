import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

const postFakeRegister = (data) => {
  return api.create(url.POST_FAKE_REGISTER, data)
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

const postFakeLogin = data => api.create(url.POST_FAKE_LOGIN, data);

const postFakeForgetPwd = data => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

const postJwtProfile = data => api.create(url.POST_EDIT_JWT_PROFILE, data);

const postFakeProfile = data => api.create(url.POST_EDIT_PROFILE, data);

const postJwtRegister = (url, data) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

const postJwtLogin = data => api.create(url.POST_FAKE_JWT_LOGIN, data);

const postJwtForgetPwd = data => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

const postSocialLogin = data => api.create(url.SOCIAL_LOGIN, data);

const getEvents = () => api.get(url.GET_EVENTS);

const addNewEvent = event => api.create(url.ADD_NEW_EVENT, event);

const updateEvent = event => api.update(url.UPDATE_EVENT, event);

const deleteEvent = event => api.delete(url.DELETE_EVENT, { headers: { event } });

const getCategories = () => api.get(url.GET_CATEGORIES);

export {
  getLoggedInUser,
  isUserAuthenticated,
  postFakeRegister,
  postFakeLogin,
  postFakeProfile,
  postFakeForgetPwd,
  postJwtRegister,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
  postSocialLogin,
  getEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
  getCategories,
};

