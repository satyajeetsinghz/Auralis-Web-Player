import spotify_logo from './Spotify_Full_Logo_RGB_White.png'
import home_icon from './home.png'
import search_icon from './search.png'
import layer_icon from './stacks.png'
import add_icon from './add.png'
import shuffle_icon from './shuffle-outline.svg'
import prev_button from './backward.svg'
import next_button from './forward.svg'
import play_button from './play.svg'
import loop_ico from './infinite-outline.svg'
import radio_ico from './airplay-audio.png'
import stack_ico from './reorder-two-outline.svg'
import resize_ico from './resize-outline.svg'
import volume_ico from './volume-high.svg'
import pause_button from './pause.svg'
import pause from './pause.png'
import backward_button from './arrow_back.png'
// import backward_button from './backward_ico.png'
import forward_button from './arrow_forward.png'
import clock_ico from './time-outline.svg'
import coldplay from './coldplay.jpeg'
import one_direction from './one-direction-radio.jpeg'
import justin_bieber from './justin-bieber-radio.jpeg'
import throwsback_2023 from './top-throwsback-2023.jpeg'
import ed_sheeran from './ed-sheeran-radio.jpeg'
import big_dawgs from './big-dawgs-hanumankind.jpeg'
import glory_yo_yo from './glory_yo_yo_honey.jpeg'
import rare_selena from './rare-selena-gomez.jpeg'
import arijit_world from './arijit-world-special.jpeg'
import alan_walker from './alan_walker.jpeg'
import charlie_puth from './charlie_puth.jpeg'
import john_cena from './john_cena.jpeg'
import peaky_blinders from './peaky_blinders.jpeg'
import taylor_swift from './taylor_swift_1989.jpeg'
import zayn_album from './zayn_room_under_the_stairs.jpeg'
import mood_remix from './mood_remix.jpeg'
import shree_gami_cover from './shree_gami_chill_beats.jpg'
import play_filled from './play-circle.svg'
import pause_filled from './pause-circle.svg'
import down_button from './chevron-down.svg'
import ellipse_vertical from './ellipsis-vertical.svg'
import auralis_logo from './auralis-logo.png'
import auralis_white_logo from './Auralis-White-logo.png'
import auralis_ico from './auralis-ico.png'




import Let_Me_Zayn from "./Let Me - ZAYN.mp3"
import Millionaire from "./Millionaire.mp3"
import Big_Dawgs from "./Big Dawgs.mp3"
import Stardust from "./Stardust.mp3"
import Bad_Blood from "./Bad Blood (Taylors Version).mp3"
import Light_Switch from "./Light Switch.mp3"
import Red_Right_Hands from "./Red Right Hand.mp3"
import Time_Is_Now from "./WWE_ The Time Is Now (John Cena).mp3"
import mood_remix_justin from './Mood (Remix) feat. Justin Bieber, J Balvin & iann dior.mp3'
import bye_bye_nyc_cover from './bye_bye_nyc.jpeg'
import bye_bye_nyc from "./Bye Bye Bye - From Deadpool and Wolverine Soundtrack.mp3";
import ut456_shreegami from './UT456shree_gami_chill_beats.mp3';
import zayn_profile from './zayn-profile.jpeg'
import glory_img from './glory.jpeg'



// Assets data
export const assets = {
    spotify_logo,
    auralis_logo,
    auralis_white_logo,
    auralis_ico,
    home_icon,
    search_icon,
    layer_icon,
    add_icon,
    shuffle_icon,
    prev_button,
    next_button,
    play_button,
    pause_button,
    pause,
    loop_ico,
    radio_ico,
    stack_ico,
    resize_ico,
    volume_ico,
    backward_button,
    forward_button,
    zayn_profile,
    glory_img,
    clock_ico,
    one_direction,
    justin_bieber,
    throwsback_2023,
    coldplay,
    ed_sheeran,
    rare_selena,
    big_dawgs,
    arijit_world,
    glory_yo_yo,
    alan_walker,
    john_cena,
    taylor_swift,
    peaky_blinders,
    charlie_puth,
    zayn_album,
    Bad_Blood,
    Light_Switch,
    Red_Right_Hands,
    Time_Is_Now,
    mood_remix,
    mood_remix_justin,
    bye_bye_nyc_cover,
    bye_bye_nyc,
    shree_gami_cover,
    ut456_shreegami,
    play_filled,
    pause_filled,
    down_button,
    ellipse_vertical
}

// Albums array data:
export const albumsData = [
    {
        id: 0,
        name: "Justin Bieber",
        image: justin_bieber,
        description: "Hits of JB",
        bgColor: "#38FEA8"
    },

    {
        id: 1,
        name: "Coldplay Radio",
        image: coldplay,
        description: "Listen to Coldplay",
        bgColor: "#6687FF"
    },

    {
        id: 2,
        name: "Throwbacks 2023",
        image: throwsback_2023,
        description: "Best of 2023 Hits",
        bgColor: "#0077FF"
    },

    {
        id: 3,
        name: "One Direction Radio",
        image: one_direction,
        description: "One Direction special",
        bgColor: "#FF6682"
    },

    {
        id: 4,
        name: "Millionaire",
        image: glory_yo_yo,
        description: "GLORY",
        bgColor: "#2E2D2D"
    },

    {
        id: 5,
        name: "Rare EP",
        image: rare_selena,
        description: "New Arrival",
        bgColor: "#E41111"
    },

    {
        id: 6,
        name: "Arijit World Special",
        image: arijit_world,
        description: "World Tour Special",
        bgColor: "#35BB9E"
    },

    {
        id: 7,
        name: "Ed Sheeran",
        image: ed_sheeran,
        description: "Listen Ed Sheeran",
        bgColor: "#FFD70F"
    }
]


// Songs array data:
export const songsData = [
    {
        id: 0,
        name: "Japanese Chill Beat",
        image: shree_gami_cover,
        file: ut456_shreegami,
        description: "Shriyam Gera",
        duration: "0:29"
    },
    {
        id: 1,
        name: "Mood (Remix)",
        image: mood_remix,
        file: mood_remix_justin,
        description: "feat. Justin Bieber, J Balvin & iann dior",
        duration: "3:12"
    },
    {
        id: 2,
        name: "Bye Bye Bye",
        image: bye_bye_nyc_cover,
        file: bye_bye_nyc,
        description: "From Deadpool and Wolverine Soundtrack",
        duration: "3:20"
    },
    {
        id: 3,
        name: "Stardust",
        image: zayn_album,
        file: Stardust,
        description: "Rooms Under The Stairs",
        duration: "3:52"
    },

    {
        id: 4,
        name: "Big Dawgs",
        image: big_dawgs,
        file: Big_Dawgs,
        description: "Hanumankind, Khalani",
        duration: "3:10"
    },

    {
        id: 5,
        name: "Millionaire",
        image: glory_yo_yo,
        file: Millionaire,
        description: "Yo Yo Honey Singh",
        duration: "3:19"
    },

    {
        id: 6,
        name: "Red Right Hands",
        image: peaky_blinders,
        file: Red_Right_Hands,
        description: "Peaky Blinders OST",
        duration: "6:10"
    },

    {
        id: 7,
        name: "Bad Blood",
        image: taylor_swift,
        file: Bad_Blood,
        description: "Taylor Swift",
        duration: "3:31"
    },

    {
        id: 8,
        name: "Time Is Now",
        image: john_cena,
        file: Time_Is_Now,
        description: "John Cena, WWE Music",
        duration: "2:56"
    },

    {
        id: 9,
        name: "Light Switch",
        image: charlie_puth,
        file: Light_Switch,
        description: "Charlie Puth",
        duration: "3:05"
    }
]