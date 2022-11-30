import { useState } from "react";

const [isFocusedService, setIsFocusedService] = useState(false);
const [isFocusedUser, setIsFocusedUser] = useState(false);
const [isFocusedPassword, setIsFocusedPassword] = useState(false);

function handleInputFocusService() {
  setIsFocusedService(true);
}

function handleInputBlurService() {
  setIsFocusedService(false);
}

function handleInputFocusUser() {
  setIsFocusedUser(true);
}

function handleInputBlurUser() {
  setIsFocusedService(false);
}

function handleInputFocusPassword() {
  setIsFocusedPassword(true);
}

function handleInputBlurPassword() {
  setIsFocusedService(true);
}
