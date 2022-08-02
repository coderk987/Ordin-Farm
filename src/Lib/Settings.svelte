<script>
    import { updateDoc , doc} from "firebase/firestore";
    import { db } from "../firebase";
    import { dbUser } from "../stores";
    import { signOut } from "firebase/auth";
    import { auth } from "../firebase";

    let showInputs = false;
    let upName = "",
        upPhone,
        upImg = "";

    function updateProfile() {
        $dbUser.name = upName;
        $dbUser.phone = upPhone;
        $dbUser.img = upImg;
        updateDoc(doc(db, "users", $dbUser.mail), {
            name: upName,
            phone: upPhone,
            img: upImg,
        });
        showInputs = false;
    }

    function logoutEmail() {
        signOut(auth)
            .then(function (result) {
                $dbUser = null;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
</script>

<body style="display: flex; flex-direction: column">
    <main class="settings settings-main layout">
        <section class="settings-section1__section1 layout">
            <div class="settings-section1__block4 layout">
                <h1 class="settings-section1__big-title layout">Settings</h1>
                <div
                    style="--src:url('https://cdn.discordapp.com/attachments/994907739857891338/1000907159028121700/arrow.png')"
                    class="settings-section1__image4 layout"
                />
            </div>
        </section>
        <comment content="======= End section1 =======" break="true" />
        <section class="settings-section2__section2 layout">
            <div class="settings-section2__block1 layout">
                <div class="settings-section2__group layout4">
                    <div class="settings-section2__group layout3">
                        <div
                            style="--src:url('https://cdn.discordapp.com/attachments/994907739857891338/1000907159678222366/gradient.png?width=313&height=662')"
                            class="settings-section2__block2 layout"
                        >
                            <div class="settings-section2__group layout2">
                                <div class="settings-section2__group layout">
                                    <img
                                        src={$dbUser.img}
                                        class="settings-section2__image2 layout"
                                        id="profilePic"
                                        alt="dbuser"
                                    />
                                </div>
                                <div class="settings-section2__group layout1">
                                    <div class="settings-section2__flex layout">
                                        <h2
                                            class="settings-section2__medium-title layout"
                                        >
                                            USER PROFILE
                                        </h2>
                                        <h1
                                            class="settings-section2__hero-title layout"
                                        >
                                            {$dbUser.name}
                                        </h1>
                                        <h3
                                            class="settings-section2__subtitle layout"
                                        >
                                            {$dbUser.email}<br
                                            />{$dbUser.phone}<br />
                                        </h3>
                                        <div
                                            class="settings-section2__block3 layout"
                                        >
                                            <h2
                                                class="settings-section2__medium-title1 layout"
                                            >
                                                Farm {$dbUser.role == "o"
                                                    ? "Owner"
                                                    : "Worker"}
                                            </h2>
                                        </div>
                                        <div class="button-container">
                                            <button
                                                class="button -regular center"
                                                on:click={() => {
                                                    showInputs = true;
                                                }}>Edit Profile</button
                                            >
                                            <button
                                                class="button -regular center"
                                                on:click={logoutEmail}
                                                >Log Out</button
                                            >
                                        </div>
                                    </div>
                                    {#if showInputs}
                                        <input
                                            class="input1"
                                            bind:value={upName}
                                            type="text"
                                            placeholder="Name"
                                        />
                                        <input
                                            class="input1"
                                            bind:value={upImg}
                                            type="text"
                                            placeholder="Profile Image"
                                        />
                                        <input
                                            class="input1"
                                            bind:value={upPhone}
                                            type="number"
                                            placeholder="Number"
                                        />
                                        <div
                                            class="button-container"
                                            style="padding-bottom: 2rem;"
                                        >
                                            <button
                                                class="button -regular center"
                                                on:click={updateProfile}
                                                >Update</button
                                            >
                                            <button
                                                class="button -regular center"
                                                on:click={() => {
                                                    showInputs = false;
                                                }}>Cancel</button
                                            >
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="settings-section2__line layout" />
            </div>
        </section>
    </main></body
>

<style>
    :root {
        --color-smoke: #e4e4e4;
        --borderRadius: 36px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    .button-container {
        display: flex;
        margin: 15px;
        flex-wrap: nowrap;
        justify-content: center;
    }

    .button {
        display: flex;
        overflow: hidden;
        margin: 10px;
        padding: 12px 12px;
        cursor: pointer;
        user-select: none;
        transition: all 150ms linear;
        text-align: center;
        white-space: nowrap;
        text-decoration: none !important;
        text-transform: none;
        text-transform: capitalize;
        color: #fff;
        border: 0 none;
        border-radius: var(--borderRadius);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.3;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        justify-content: center;
        align-items: center;
        flex: 0 0 110px;
    }

    .button.-regular {
        color: #fff;
        background-color: #2cb67d;
    }
    .button.-regular:hover {
        color: #2cb67d;
        background-color: #fff;
        transition: 0.2s ease-in;
    }

    .input1 {
        padding: 10px;
        background: #232323;
        margin-bottom: 10px;
        text-decoration: none;
        box-sizing: border-box;
        object-fit: cover;
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        font-family: Outfit;
        border: none;
    }
    /* fonts.css */
    @import url("https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    @font-face {
        font-family: "FontAwesome";
        font-weight: normal;
        font-style: normal;
        src: url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?v=4.3.0");
        src: url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0")
                format("embedded-opentype"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0")
                format("woff2"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0")
                format("woff"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0")
                format("truetype"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular")
                format("svg");
    }

    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    hr {
        display: block;
        font-size: 1em;
        font-weight: normal;
        margin: 0;
        border-width: 0;
        opacity: 1;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .settings-main {
        display: flex;
        flex-direction: column;
        background-color: #16161a;
    }
    .settings-main.layout {
        position: relative;
        overflow: hidden;
        min-height: 900px;
    }
    .settings-section1__section1 {
        display: flex;
        flex-direction: column;
    }
    .settings-section1__section1.layout {
        position: relative;
    }
    .settings-section1__block4 {
        display: flex;
        flex-direction: column;
    }
    .settings-section1__block4.layout {
        position: relative;
        flex-grow: 1;
        width: 33.33%;
        margin: 42px 38.89% 35px 27.78%;
    }
    .settings-section1__big-title {
        font: 300 32px/1.2 "Outfit", Helvetica, Arial, serif;
        color: white;
        letter-spacing: 0px;
        opacity: 0.85;
    }
    .settings-section1__big-title.layout {
        position: relative;
        height: -webkit-min-content;
        height: -moz-min-content;
        height: min-content;
        min-width: 0px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
    }
    .settings-section1__image4 {
        background: var(--src) center center/contain no-repeat;
    }
    .settings-section1__image4.layout {
        position: absolute;
        top: 9px;
        height: 23px;
        left: -77px;
        width: 46px;
    }
    .settings-section2__section2 {
        display: flex;
        flex-direction: column;
    }
    .settings-section2__section2.layout {
        position: relative;
        margin: 0px 0px -115px;
    }
    .settings-section2__block1 {
        display: flex;
        flex-direction: column;
    }
    .settings-section2__block1.layout {
        position: relative;
        height: 871px;
        margin: 11px 17px 46px;
    }
    .settings-section2__group {
        display: flex;
        flex-direction: column;
    }
    .settings-section2__group.layout4 {
        position: relative;
        height: 627px;
        margin: 0px 0px 244px 1px;
    }
    .settings-section2__group.layout3 {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 14px;
        right: 15px;
    }
    .settings-section2__block2 {
        display: flex;
        flex-direction: column;
        background: var(--src) center center/contain no-repeat;
        border-radius: 12px 12px 12px 12px;
    }
    .settings-section2__block2.layout {
        position: relative;
        flex-grow: 1;
        min-height: 627px;
    }
    .settings-section2__group.layout2 {
        position: relative;
        height: 408px;
        margin: 31px 8px 188px;
    }
    .settings-section2__group.layout {
        position: absolute;
        top: 0px;
        height: 265px;
        left: 0px;
        right: 0px;
        width: 63.57%;
        margin: 51px auto 92px;
    }

    .settings-section2__image2.layout {
        position: absolute;
        margin: 0px 0px 99px;
        top: 0px;
        height: 175px;
        left: 4px;
        right: 7px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        object-fit: contain;
    }
    .settings-section2__group.layout1 {
        position: absolute;
        top: 0px;
        bottom: 0px;
        min-height: 408px;
        left: 0px;
        right: 0px;
    }
    .settings-section2__flex {
        display: flex;
        flex-direction: column;
    }
    .settings-section2__flex.layout {
        position: relative;
        flex-grow: 1;
        min-height: 550px;
    }
    .settings-section2__medium-title {
        display: flex;
        justify-content: center;
        font: 24px/1.2 "Outfit", Helvetica, Arial, serif;
        color: white;
        text-align: center;
        letter-spacing: 0px;
        opacity: 0.5;
    }
    .settings-section2__medium-title.layout {
        position: relative;
        min-height: 29px;
        width: 80%;
        margin: 0px auto;
    }
    .settings-section2__hero-title {
        display: flex;
        justify-content: center;
        font: 48px/1.2 "Outfit", Helvetica, Arial, serif;
        color: white;
        text-align: center;
        letter-spacing: 0px;
        opacity: 0.85;
    }
    .settings-section2__hero-title.layout {
        position: relative;
        min-height: 58px;
        width: 91.07%;
        margin: 205px auto 0px;
    }
    .settings-section2__subtitle {
        display: flex;
        justify-content: center;
        font: 300 22px/1.2 "Outfit", Helvetica, Arial, serif;
        color: white;
        text-align: center;
        letter-spacing: 0px;
        opacity: 0.64;
    }
    .settings-section2__subtitle.layout {
        position: relative;
        min-height: 27px;
        width: 100%;
        margin: 16px 0px 0px;
    }
    .settings-section2__block3 {
        display: flex;
        flex-direction: column;
    }
    .settings-section2__block3.layout {
        position: relative;
        min-height: 29px;
        width: 76.79%;
        margin: 44px 15% 0px 8.21%;
    }
    .settings-section2__medium-title1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font: 24px/1.2 "Outfit", Helvetica, Arial, serif;
        color: #2cb67d;
        text-align: center;
        letter-spacing: 0px;
    }
    .settings-section2__medium-title1.layout {
        position: relative;
        flex-grow: 1;
        min-height: 29px;
        margin: 0px 8px 0px 25px;
        padding-left: 10px;
    }
    .settings-section2__line {
        background-color: #323239;
    }
    .settings-section2__line.layout {
        position: absolute;
        top: 0px;
        height: 1px;
        left: 0px;
        right: 0px;
        margin: -30px 0px 160px;
    }
    #profilePic{
        border-radius: 100%;
    }
</style>
