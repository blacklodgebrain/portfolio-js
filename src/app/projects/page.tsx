import styles from "./page.module.css"
import Image from "next/image";
import Header from "@/components/global/Header";


// All my images
//projects
import SwansImage from "@/app/assets/swans.png";
import ExploreIPelot from "@/app/assets/GDES132_SPRING2024_EXPLORE_IPELOT_.png"
import AztecCamera from "@/app/assets/single-boy-wonders.png"
import ArtShowPoster from "@/app/assets/Art_Show_Poster.png"
import BicicletaDeLiberta from "@/app/assets/GDES_102_FALL2023_ARTNOUVEAU_ISABELLA_PELOT.png"
import Automobubble from "@/app/assets/GDES_132_SPRING2024_CreativeInvention_IPELOT.png"
import BookCover from "@/app/assets/GDES131_FALL2023_6.1IndependentStudy_Poster_IPelot 1.png"
import RecipeOnesheet from "@/app/assets/GDES131_FALL2023_5.1RecipeOnesheet_IPelot.png"
import Bookmark from "@/app/assets/GDES131_FALL2023_3.1ShortcutsBookmark_IPelot.png"
import HobbyLogo from "@/app/assets/GDES131-100_FALL2023_1.1HobbyLogo_IPelot.png"
import IllustrativeSet from "@/app/assets/GDES131_FALL2023_2.2IllustrativeSet_IPelot copy.png"
import GlobalHarmony from "@/app/assets/GlobalHarmony_IsabellaPelot.png"
import WhatIsDesign from "@/app/assets/WhatGDMeans_IsabellaPelot.png"
import Bauhaus from "@/app/assets/GDES_132_SPRING2024_2.1AlbumCover_IPelot.png"

//illustrations
import FlowerLadies from "@/app/assets/Flower_Ladies.png"
import UnderwaterEye from "@/app/assets/Underwater_Eye.png"
import IceCream from "@/app/assets/WeeklyExercise6ICECREAM_IPelot.png"
import Jellyfish from "@/app/assets/WeeklyExercise6PROMPT_IPelot.png"
import BasketOfSkulls from "@/app/assets/WeeklyExercise7PROMPT_IPelot.png"
import Leaves from "@/app/assets/WeeklyExercise9LEAVES_IPelot.png"
import Candle from "@/app/assets/WeeklyExerciseCANDLE_IPelot.png"
import Coffee from "@/app/assets/WeeklyExerciseCOFFEE_IPelot.png"
import Wreath from "@/app/assets/WeeklyExerciseWREATH_IPelot.png.png"
import NameSnowflake from "@/app/assets/WeeklyExercisePROMPT_FirstinitialLastname.png"
import Bat from "@/app/assets/101_2.1AnimalMascot_IPelot copy.png"
import Perfection from "@/app/assets/GDES_120_SPRING2024_YOUCANQUOTEME_ISABELLA_PELOT [Recovered].jpg"


export default function Projects() {
    const sections = [
        {
            id: "projects",
            label: "Projects",
            gallery:[
                {
                    title: "Project 1: Swan's Hardware",
                    description: 'My super cool swan project....',
                    src: SwansImage,
                    width: 200,
                    height: 200,
                    alt: "Swan's logo.",
                },

                {
                    src: ExploreIPelot,
                    width: 200,
                    height: 200,
                    alt: "Explore magazine cover.",
                },
                {
                    src: AztecCamera,
                    width: 200,
                    height: 200,
                    alt: "Single cover, Aztec Camera.",
                },
                {
                    src: ArtShowPoster,
                    width: 200,
                    height: 200,
                    alt: "Art Show Poster",
                },
                {
                    src: BicicletaDeLiberta,
                    width: 200,
                    height: 200,
                    alt: "Italian art noveau poster, woman on bicycle.",
                },
                {
                    src: Automobubble,
                    width: 200,
                    height: 200,
                    alt: "Woman floating in bubble ad poster.",
                },
                {
                    src: BookCover,
                    width: 200,
                    height: 200,
                    alt: "Retro sci-fi book cover.",
                },
                {
                    src: RecipeOnesheet,
                    width: 200,
                    height: 200,
                    alt: "Eggnog recipe onesheet.",
                },
                {
                    src: Bookmark,
                    width: 200,
                    height: 200,
                    alt: "Siouxie Sioux Adobe Illustrator shortcuts themed bookmark.",
                },
                {
                    src: HobbyLogo,
                    width: 200,
                    height: 200,
                    alt: "Jewelry making themed hobby logo.",
                },
                {
                    src: IllustrativeSet,
                    width: 200,
                    height: 200,
                    alt: "Thumbelina themed illuistrative set.",
                },
                {
                    src: GlobalHarmony,
                    width: 200,
                    height: 200,
                    alt: "Global Harmony movie poster.",
                },
                {
                    src: WhatIsDesign,
                    width: 200,
                    height: 200,
                    alt: "What is design? poster.",
                },
                {
                    src: Bauhaus,
                    width: 200,
                    height: 200,
                    alt: "Single cover, All We Ever Wanted Was Everything by Bauhaus.",
                },
                {
                    src: Perfection,
                    width: 200,
                    height: 200,
                    alt: "Salvador Dali quote poster.",
                },
            ]
        }
    ]
    return (
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.sectionWrapper}>
                <h1 className={styles.h1}>Portfolio</h1>

                {sections.map((section) => {
                    return (
                        <div key={`section-${section.id}`} className={styles.section}>
                            <h2 className={styles.h2}>Projects</h2>
                            <div className={styles.gallery}>
                                {section.gallery.map((image, index) => {
                                    return (
                                        <div key={`gallery-${index}`} className={styles.project}>
                                            <h3 className={styles.h3}>{image?.title}</h3>
                                            <p className={styles.imageDescription}>{image?.description}</p>
                                            <div style={{position: "relative", width: "300px", height: "300px"}}>
                                                <Image src={image.src} alt={image.alt} fill style={{objectFit: "contain"}} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>  
                        </div>
                    )
                })};
            </div>
        </main>

            <footer className={styles.footer}>
                <small>Copyright© Isabella Pelot 2024</small>
            </footer>
        </>
    )
}