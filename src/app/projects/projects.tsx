import styles from "page.module.css"
import Image from "next/image";

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
import Broom from "@/app/assets/WeeklyExercise4PROMPT_IPelot.png"
import IceCream from "@/app/assets/WeeklyExercise6ICECREAM_IPelot.png"
import Jellyfish from "@/app/assets/WeeklyExercise6PROMPT_IPelot.png"
import BasketOfSkulls from "@/app/assets/WeeklyExercise7PROMPT_IPelot.png"
import Leaves from "@/app/assets/WeeklyExercise9LEAVES_IPelot.png"
import Candle from "@/app/assets/WeeklyExerciseCANDLE_IPelot.png"
import Coffee from "@/app/assets/WeeklyExerciseCOFFEE_IPelot.png"
import Wreath from "@/app/assets/WeeklyExerciseWREATH_IPelot.png.png"
import NameSnowflake from "@/app/assets/WeeklyExercisePROMPT_FirstinitialLastname.png"
import Bat from "@/app/assets/101_2.1AnimalMascot_IPelot copy.png"


export default function Projects() {
    return (
        <>
            <div className={styles.projects}>
                <h2>Projects</h2>
                <div className={styles.project}>
                    <h3>Project 1: Swan's Hardware</h3>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={SwansImage} alt="Swan's Logo." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 2: Explore</h3>
                    <p>A cover for a fictitious magazine called "Explore".</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={ExploreIPelot} alt="Explore magazine cover." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 3: Single Cover, Aztec Camera</h3>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={AztecCamera} alt="Single cover, Aztec Camera." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 4: Art Show Poster</h3>
                    <p>A poster for NIC's high school art show.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={ArtShowPoster} alt="Art Show Poster." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 5: Bicicleta de Liberta</h3>
                    <p>A poster in the Italian Art Noveau style, Stile Liberta.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={BicicletaDeLiberta} alt="Bicicleta De Liberta." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 6: Automobubble</h3>
                    <p>An adverisement for an invention I created.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Automobubble} alt="Automobubble." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 7: Retro Sci-Fi Book Cover</h3>
                    <p>A bookcover in the style of a mid-century sci-fi novel.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={BookCover} alt="Retro sci-fi book cover." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 8: Recipe Onesheet</h3>
                    <p>A recipe for a delicious Christmas classnameic, eggnog.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={RecipeOnesheet} alt="Eggnog recipe onesheet." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 9: Siouxie and the Banshees Bookmark</h3>
                    <p>A bookmark decpicting some illuistrator keyboard shortcuts, in a Siouxie and the Banshees theme.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Bookmark} alt="Shortcuts Siouxie Sioux bookmark." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 10: Hobby Logo</h3>
                    <p>A logo created for my hobby, jewelry making.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={HobbyLogo} alt="Hobby logo, jewelry making." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 11: Illustrative Set</h3>
                    <p>A set of figures used in a pattern based on the classic fairytale, Thumbalina.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={IllustrativeSet} alt="Illustrative set, Thumbalina's World" fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 12: Movie Poster</h3>
                    <p>A poster resdesign for the movie Global Harmony.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={GlobalHarmony} alt="Golbal Harmony movie poster redesign." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 13: What is Design?</h3>
                    <p>A poster inspired by the tools of design.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={WhatIsDesign} alt="What is design? Poster based on design tools." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <div className={styles.project}>
                    <h3>Project 14: Single Cover, Bauhaus</h3>
                    <p>A cover for the single "All We Ever Wanted was Everything" by Bauhaus.</p>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Bauhaus} alt="Single cover, Bauhaus." fill style={{objectFit: "contain"}} />
                    </div>
                </div>

                <h2>Illustrations</h2>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={FlowerLadies} alt="Flower Ladies." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={UnderwaterEye} alt="Underwater Eye." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Broom} alt="Broom." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={IceCream} alt="Ice Cream." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Jellyfish} alt="Jellyfish." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={BasketOfSkulls} alt="Basket of Skulls." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Leaves} alt="Leaves." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Candle} alt="Candle." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Coffee} alt="Coffee." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Wreath} alt="Wreath." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={NameSnowflake} alt="Snowflake made of my name." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
                <div className={styles.project}>
                    <div style={{position: "relative", width: "200px", height: "150px"}}>
                        <Image src={Bat} alt="Animal mascot, bat." fill style={{objectFit: "contain"}} />
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <small>Copyright© Isabella Pelot 2024</small>
            </footer>
        </>
    )
    
}