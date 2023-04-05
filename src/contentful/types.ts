export interface YoutubeVideo {
    fields: {
            title: string;
            description: string;
            image: {
                fields: {
                    file: {
                        url: string;
                    }
                    
                }
            }
            url: string;
    }
    sys: {
        id: string;
    }
}