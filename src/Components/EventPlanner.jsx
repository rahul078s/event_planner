import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className='description'>
                {/* Brief introduction or marketing message*/}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From Birthdays to corporate meetings, we've got you covered.                
                </p>
                {/* Primary call-to-action button */}
                <button className='get-started-button'>Get Started</button>
            </section>

            <section className='events_categories'>
                {/* Social event types */}
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthdays parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby Showers</li>
                    <li>Graduation Parties</li>
                    <li>Family reunions</li>
                </ul>
                {/* Entertainment-based event types */}
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                {/* Community-focused event types */}
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>

            <section className='features'>
                {/* Section heading */}
                <h2>Features</h2>
                {/* List of key platform features */}
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collabration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>

            <section className='testimonials'>
                <h2>Testimonials</h2>
                {/* A testimonial block */}
                <div className='testimonial'>
                    <p>Event Planner made organizing my wedding a breeze. Highly recommended!</p>
                    <p className='author'>- Emily Johnson</p>
                </div>
                {/* Another testimonial block */}
                <div className='testimonail'>
                    <p>I use Event Planner for all my corporate events. Ti saves me so much time and effort!</p>
                    <p className='autohr'>- John Smith</p>
                </div>
            </section>

            <section className='contact'>
                {/* Section Heading */}
                <h2>Contact Us</h2>
                {/* Contact Form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder='Name' />
                    {/* Email input field */}
                    <input type="email" placeholder='Email' />
                    {/* Message textarea */}
                    <textarea placeholder='Message'></textarea>
                    {/* Submit button */}
                    <button className='submit-button'>Send</button>
                </form>
                <h2></h2>
            </section>
            
            <Footer/>
        </div>
    );
};

export default EventPlanner;
