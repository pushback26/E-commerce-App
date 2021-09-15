import React from 'react'

function Home() {
    return (
        
            <div className="home container row center-align">
                <div className="background">
                    <h2>Home Shop</h2>    
                    
                    <div className="col s6 pull-s2">
                        <div className="travel-essential">
                            <img src={'https://cdn.packhacker.com/2019/04/earth-friendly-sustainable-packing-list-hero.jpg'} alt="Travel Essentials"/>
                        </div>
                    </div>    
                    <div className="col s6 push-s1">
                        <p className="flow-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a nulla gravida, vulputate justo luctus, euismod elit. Duis et tincidunt dui, vitae pulvinar arcu. Sed sit amet scelerisque mauris, quis rutrum metus. Aliquam ac eros non ex tristique porta ac vitae sapien. Sed id pulvinar diam, quis dignissim augue. Proin.</p>
                    </div>
                </div>
            </div>
        
    )
}

export default Home;