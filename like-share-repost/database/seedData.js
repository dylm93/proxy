const  { Songs } = require('./models.js');
const connection = require ('./index.js')

const sampleSongs = [
    {
        songName: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'
    },
    {
        
        songName: 'Blitzkrieg Bop',
        artist: 'Ramones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://consequenceofsound.files.wordpress.com/2014/06/ramones-1976.jpg?quality=80&w=640',
        releasedBy: '45 years ago'
    },
    {
       
        songName: 'Gimme Shelter',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'
    },
    {
       
        songName: 'People are Strange',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Fortunate Son',
        artist: 'CCR',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://img.discogs.com/kErYBMumf2FbhOWvRTHFRqRE8u8=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-371917-1393573750-9393.jpeg.jpg',
        releasedBy: '50 years ago'
    },
    {
        songName: 'Angie',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Wild Horses',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Sympathy for the Devil',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Start Me Up',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'
    },
    {
        
        songName: 'Jumpin Jack Flash',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        songName: 'Brown Sugar',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Miss You',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: `She's so Cold`,
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Under My Thumb',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Honky Tonk Women',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        songName: 'Midnight Rambler',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Beast of Burden',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Tumbling Dice',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'As Tears Go By',
        artist: 'The Rolling Stones',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://images.gibson.com/Lifestyle/2016/Rolling-Stones_Rocks-Off_600.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Hello, I Love You',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'Roadhouse Blues',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Riders on the Storm',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Light My Fire',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Break On Through',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Touch Me',
        artist: 'The Doors',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'http://altamont.pt/wp-content/uploads/2014/03/MorrisonHotel.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'Black Dog',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'
    },
    {
        
        songName: 'Kashmir',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Immigrant Song',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Whole Lotta Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Rock and Roll',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'Dazed and Confused',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Ramble On',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Good Times Bad Times',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Misty Mountain Hop',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'All My Love',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'Fool in the Rain',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Moby Dick',
        artist: 'Led Zeppelin',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://images-na.ssl-images-amazon.com/images/I/91lTMM49zKL._SY355_.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: `Baba O'Reily`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'

    },
    {
       
        songName: 'Pinball Wizard',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'My Generation',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'Magic Bus',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'

    },
    {
        
        songName: 'Boris the Spider',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Squeeze Box',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: `I'm Free`,
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Happy Jack',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        songName: 'My Wife',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Summertime Blues',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: 'Young Man',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
       
        songName: '5.15',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'


    },
    {
        
        songName: 'Substitute',
        artist: 'The Who',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Whosnext.jpg/220px-Whosnext.jpg',
        releasedBy: '50 years ago'

    },
    {
        songName: 'Big Poppa',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'
    },
    {
        
        songName: 'Juicy',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'

    },
    {
       
        songName: 'Hypnotized',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'

    },
    {
       
        songName: 'Microphone Murderer',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'

    },
    {
        
        songName: 'Mo Money Mo Problems',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'

    },
    {
        songName: 'Angie',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'One More Chance',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'Runnin',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'Notorious Thugs',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'

    },
    {
        
        songName: 'Gimme the Loot',
        artist: 'Notorious B.I.G',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://nyoobserver.files.wordpress.com/2017/03/11312842_1038215196188532_6473040481384645897_o.jpg?quality=80&w=594',
        releasedBy: '20 years ago'


    },
    {
        songName: 'Changes',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'
    },
    {
        
        songName: 'Dear Mama',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
       
        songName: `California Love`,
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'Hit Em Up',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'Ghetto Gospel',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        songName: 'Hail Mary',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'I Get Around',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'How Do U Want It',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'Life Goes On',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'Breathin',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        songName: 'Thugz Mansion',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'Riders on the Storm',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
       
        songName: 'To Live and Die in L.A.',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',    
        releasedBy: '20 years ago'

    },
    {
       
        songName: 'Letter 2 My Unborn',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        
        songName: 'Gangsta Party',
        artist: '2pac',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/2PacGreatestHits.jpg/220px-2PacGreatestHits.jpg',
        releasedBy: '20 years ago'


    },
    {
        songName: 'Come as You Are',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'
    },
    {
        
        songName: 'Polly',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'
    },
    {
       
        songName: 'About a Girl',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,        
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
       
        songName: 'Lithium',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        
        songName: 'All Apologies',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        songName: 'In Bloom',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        
        songName: 'Love Buzz',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
       
        songName: 'Something in the Way',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
       
        songName: 'Where Did You Sleep Last Night',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        
        songName: 'Drain You',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        songName: 'Lake of Fire',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
        
        songName: 'Dumb',
        artist: 'Nirvana',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F09%2F000125503.jpg%3Fw%3D720&w=1000&c=sc&poi=face&q=70',
        releasedBy: '30 years ago'

    },
    {
       
        songName: `Smoke Two Joints`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'
    },
    {
       
        songName: 'Santeria',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        
        songName: 'Doin Time',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        songName: 'Pawn Shop',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        
        songName: 'Jailhouse',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
       
        songName: 'Pool Shark',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
       
        songName: `Rivers of Babylon`,
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        
        songName: 'Summertime',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        songName: 'Ebin',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        
        songName: 'STP',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
       
        songName: 'New Thrash',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
       
        songName: 'Garden Grove',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'


    },
    {
        
        songName: 'Scarlet Begonias',
        artist: 'Sublime',
        likeCount: 0,
        playsCount: 0,
        repostCount: 0,
        albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sublime40OztoFreedomalbumcover.jpg/220px-Sublime40OztoFreedomalbumcover.jpg',
        releasedBy: '30 years ago'

    }
]

const Data = [];

for (var i = 0; i < sampleSongs.length; i++) {
    let template = sampleSongs[i]
    Data.push(template)
}


const insertSongs = function() {
    Songs.create(Data)
      .then(() => connection.close())
      .catch(error => console.error(error));
  };

insertSongs()

module.exports = { sampleSongs }