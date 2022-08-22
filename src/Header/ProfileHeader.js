import React from "react";
import { profileHeader} from './ProfileHeader.css'

export const ProfileHeader = () => {

  return (
    <>
      <span id="user-name"> Jonathan Soto </span>
      <span id="proffesion"> Ingeniero Multimedia </span>
      <a href="https://wa.me/+573206925727/?text=Hola%20Jonathan%20hemos%20decidido%20contratarte!">      <img
        id="profile-picture"
        width="70" 
        src="https://i.imgur.com/LETfd4m.jpg"
        alt="Generic placeholder image"
        class="img-fluid rounded-circle border-0 float-right"
      />
      </a>

    </>
  );
};
