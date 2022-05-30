// State 
    // heading
    // timeOfPublication
    // author
    // content

interface News {
    timeOfPublication: Date;
    heading: string;
    content: string;
    author: string;

}

// observerable  Class
    // Pubisher class
        // 1. state: State
        // 2. List of subscribers : Array<Subscriber>
        // 3. Subscribe(): boolean 
        // 4. Unsubscribe(): boolean
        // 5. Notify(): void
        // 6. Trigger Notifications():void
        // 7. Publish(state:State): void


class NewsPublisher {
    // data
    news: News; 
    subscribers: Array<Subscriber>;

    // methods 
    subscriber(subscriber:Subscriber): boolean{
        return true;
    }
    unsubscriber(subscriber:Subscriber): boolean {
        return true;
    }
    notify():void {
    }
    triggerNotification():void {
    }
    publish():boolean {
        return true; 
    }
}


// Observer Interface
    //Subscriber Interface
        // update(state:State)
interface Subscriber {
    update(news: News): void;
}

// Observer Concrete Class 
    // Subscriber Concrete classe





//Testing our code 
    // Observerable Object(s)
        // Publisher Object(s)

    // Observer Object(s)
        // Subscriber Object(s)