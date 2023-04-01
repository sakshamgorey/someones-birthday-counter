import React, { useState, useEffect } from "react";
import "./App.css";
import Typist from 'react-typist';

function App(props) {
  // Replace the `month` and `day` values with your desired birthday date
  const month = 3; // November
  const day = 10;
  const currentYear = new Date().getFullYear();
  const birthdayThisYear = new Date(`${month}/${day}/${currentYear}`);

  // If the birthday has already passed this year, calculate next year's birthday
  const nextYear =
    birthdayThisYear < new Date() ? currentYear + 1 : currentYear;
  const nextBirthday = new Date(`${month}/${day}/${nextYear}`);

  // Calculate the difference in days between now and the next birthday
  const diffInMs = nextBirthday.getTime() - new Date().getTime();

  const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  const diffInYearsString = diffInYears.toString();
  
  // Convert milliseconds to months
  const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  const diffInMonthsString = diffInMonths.toString();
  
  // Convert milliseconds to weeks
  const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
  const diffInWeeksString = diffInWeeks.toString();
  
  // Convert milliseconds to days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInDaysString = diffInDays.toString();
  
  // Convert milliseconds to hours
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInHoursString = diffInHours.toString();
  
  // Convert milliseconds to minutes
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInMinutesString = diffInMinutes.toString();
  
  // Convert milliseconds to seconds
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInSecondsString = diffInSeconds.toString();
  
  // Convert milliseconds to milliseconds
  const diffInMilliseconds = diffInMs;
  const diffInMillisecondsString = diffInMilliseconds.toString();
  return (
    <div className="App">
      <Typist>
        <span className="green-font">>3</span>
        <Typist.Backspace count={1} delay={300} />
        <span className="green-font">2</span>
        <Typist.Backspace count={1} delay={300} />
        <span className="green-font">1</span>
        <Typist.Backspace count={1} delay={300} />
        <span className="green-font">0</span>
        <Typist.Backspace count={1} delay={300} />
        <span className="green-font">INITIATING GETTING SHREESH BITCHES PROTOCOL</span>
        <div className="green-font">LOADING:|*************************************************|</div>
        <div className="green-font">>SYSTEM BREAKDOWN</div>
        <div className="green-font">ERROR-CODE:051</div>
        <div className="green-font">ERROR-LOG:SKILL ISSUE</div>
        <Typist.Backspace count={155} delay={600} />
        <span className="green-font">>INITIATING SHREESH BIRTHDAY PROTOCOL</span>
        <Typist.Delay ms={100} />
        <div className="green-font">>[PROTOCOL CREATED SO HIS FRIEND DOESNT FORGET HIS BIRTHDAY]</div>
        <div className="green-font">>THERE ARE <b>{diffInMonthsString}</b> MONTHS REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInWeeksString}</b> WEEKS REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInDaysString}</b> DAYS REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInHoursString}</b> HOURS REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInMinutesString} </b>MINUTES REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInSecondsString} </b>SECONDS REMIANING FOR SHREESH'S BIRTHDAY</div>
        <div className="green-font">>THERE ARE <b>{diffInMillisecondsString}</b> MILISECONDS REMIANING FOR SHREESH'S BIRTHDAY</div>
      </Typist>
    </div>
  );
}

export default App;
