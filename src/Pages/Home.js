import Story from "../Components/Story";
import storyData from "../Data/storyData.json"
import Event from "../Components/Event";
import eventData from "../Data/eventData.json"
import Drink from "../Components/Drink";
import drinkData from "../Data/drinkData.json"

const Home = () => {
    return (
        <main>
            <section className="Hero">
                <h3>A Classic</h3>
                <h1>Gin Joint</h1>
                <h3>New York</h3>
            </section>
            <section>
                <Story
                    category={storyData[0].category}
                    title={storyData[0].title}
                    content={storyData[0].content}
                    buttonText={storyData[0].buttonText}
                    image={storyData[0].image}
                />
            </section>
            <section>
                <h4>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</h4>
                {eventData.map((event, i) => <Event key={i} data={event} />)}
            </section>
            <section>
                <Story
                    category={storyData[1].category}
                    title={storyData[1].title}
                    content={storyData[1].content}
                    buttonText={storyData[1].buttonText}
                    image={storyData[1].image}
                />
            </section>
            <section>
                {drinkData.map((drink, i) => <Drink key={i} data={drink} />)}
            </section>
        </main>
    );
}
export default Home;