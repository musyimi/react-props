import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import CortanaImage from "./images/cortana.png"

function App() {
    return(
        <div>
            <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                Personal Effects
                </p>               
            </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-2'>
                            <ProfileCard title="Alexa" image = {CortanaImage} handle ="@alexa" description ="A something for amazon" />                       
                        </div>
                        <div className='column is-2'>
                            <ProfileCard title="Cortana" image = {CortanaImage} handle ="@cortana" description ="A something for microsoft" />                       
                        </div>
                        <div className='column is-2'>
                            <ProfileCard title="Siri" image = {CortanaImage} handle ="@siri" description ="A something for apple" />                       
                        </div>
                        <div className='column is-2'>
                            <ProfileCard title="Alexa" image = {CortanaImage} handle ="@alexa" description ="A something for amazon" />                       
                        </div>
                        <div className='column is-2'>
                            <ProfileCard title="Alexa" image = {CortanaImage} handle ="@alexa" description ="A something for amazon" />                       
                        </div>
                        <div className='column is-2'>
                            <ProfileCard title="Alexa" image = {CortanaImage} handle ="@alexa" description ="A something for amazon" />                       
                        </div>
                        
                    </div>
                </section>
            </div>

           
        </div>
    );
}

export default App;
