import React from "react";
import Movie from "./movie";
import ReviewForm from "./review-form";
import Reviews from "./reviews"

export default class MovieList extends React.Component{   
    render(){

        let DogReviews = [
            {
                user:'Amy',
                comment:'So delightful!',
            },
            {
                user:'Alejandro',
                comment:'could be better',
            },
            {
                user:'Evelyn',
                comment:'Perfectly seasoned, but soggy',
            }
        ];

        let SpiderManReviews = [
            {
                user: 'Bob',
                comment: 'Oof!',
            }
        ]
        let MarryMeReviews = []
        let GucciReviews = []
        let Sing2Reviews = []


        return <div>
            <div>
                <Movie {...{reviews: DogReviews, title: 'Dog',  image: '/img/Dog.jpg', altimage: 'DOG movie poster', description:'DOG is a buddy comedy that follows the misadventures of two former Army Rangers paired against their will on the road trip of a lifetime. Army Ranger Briggs (Channing Tatum) and Lulu (a Belgian Malinois dog) buckle into a 1984 Ford Bronco and race down the Pacific Coast in hopes of making it to a fellow soldier\'s funeral on time. Along the way, they\'ll drive each other completely crazy, break a small handful of laws, narrowly evade death, and learn to let down their guards in order to have a fighting chance of finding happiness.' }}/>
            </div>

            <div>
                <Movie {...{reviews: SpiderManReviews, title: 'Spider Man',image: '/img/SpiderMan.jpg', altimage: 'Spider Man movie poster', description:'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero\'s identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange\'s help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who\'ve ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.'}}/>
            </div>

             <div>
                <Movie {...{reviews: MarryMeReviews, title: 'Marry Me', image: '/img/MarryMe.jpg', altimage: 'Marry me movie poster', description: 'Kat Valdez (Lopez) is half of the sexiest celebrity power couple on Earth with hot new music supernova Bastian (Maluma, making his feature-film debut). As Kat and Bastian’s inescapable hit single, “Marry Me,” climbs the charts, they are about to be wed before an audience of their fans in a ceremony that will streamed across multiple platforms. Divorced high-school math teacher Charlie Gilbert (Owen Wilson) has been dragged to the concert by his daughter Lou (Chloe Coleman, HBO\’s Big Little Lies) and his best friend (Sarah Silverman). When Kat learns, seconds before the ceremony, that Bastian has cheated on her with her assistant, her life turns left as she has a meltdown on stage, questioning love, truth and loyalty. As her gossamer world falls away, she locks eyes with a stranger—a face in the crowd.'}}/>
            </div>

            <div>
                <Movie {...{reviews: GucciReviews, title: 'House of Gucci', image: '/img/Gucci.jpg', altimage: 'House of Gucci movie poster', description: 'House of Gucci is inspired by the shocking true story of the family behind the Italian fashion empire. When Patrizia Reggiani, (Lady Gaga), an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately...murder.'}}/>
            </div>
        
            <div>
                <Movie {...{reviews: Sing2Reviews, title: 'Sing 2', image: '/img/Sing2.jpg',altimage: 'Sing 2 movie poster', description: 'Buster Moon and his all-star cast of performers prepare to launch their most dazzling stage extravaganza yet ...all in the glittering entertainment capital of the world. There\'s just one hitch: They first have to persuade the world\'s most reclusive rock star Clay Callaway--played by global music icon Bono, in his animated film debut--to join them. '}}/> 
            </div> 
        </div>
    }
}    
