import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/tools/backbutton.css';

const BackButton = () => {
  return (
    <div class="styled-wrapper">
        <button class="button">
          <div class="button-box">
            <span class="button-elem">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-icon"
              >
                <path
                  fill="white"
                  d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                ></path>
              </svg>
            </span>
            <span class="button-elem">
              <svg
                fill="white"
                viewBox="0 0  24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-icon"
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
  );
};

export default BackButton;