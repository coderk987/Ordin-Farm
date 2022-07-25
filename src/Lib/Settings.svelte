<script>
    import { updateDoc } from "firebase/firestore";
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
        <!-- ======= section1 ======= -->
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
        <!-- ======= section2 ======= -->
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
                                    <div
                                        style="--src:url(https://cdn.discordapp.com/attachments/994907739857891338/1000907159372058644/blur.png)"
                                        class="settings-section2__image1 layout"
                                    />
                                    <img
                                        src={$dbUser.img}
                                        class="settings-section2__image2 layout"
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
                                            bind:value={upPhone}
                                            type="number"
                                            placeholder="Number"
                                        />
                                        <input
                                            class="input1"
                                            bind:value={upImg}
                                            type="text"
                                            placeholder="Image Url"
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
        flex: 0 0 160px;
        box-shadow: 2px 5px 10px var(--color-smoke);
    }

    .button.-regular {
        color: #202129;
        background-color: #f2f2f2;
    }

    .input1 {
        padding: 10px;
        border-radius: 10px;
        background: #dbdbdc;
    }
</style>
