/*
 * Copyright (C) 2012-2020  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import { Content } from "./Content";
import { PuzzleConfig, Goban, JGOFNumericPlayerColor } from "goban";
import { openPopup } from "PopupDialog";

class Module4 extends Content {
    audio: HTMLAudioElement;

    constructor(audioUrl: string) {
        super();
        // Initialize the audio only if a URL is provided
        if (audioUrl) {
            this.audio = new Audio(audioUrl);
        }
    }

    playAudio = () => {
        if (this.audio) {
            this.audio.play().catch((error) => console.error("Error playing audio:", error));
        }
    };

    // async componentDidMount() {
    //     if (this.audio) {
    //         try {
    //             await this.audio.play();
    //         } catch (error) {
    //             console.error("Error playing audio:", error);
    //         }
    //     }
    // }

    // componentWillUnmount() {
    //     if (this.audio) {
    //         this.audio.pause();
    //         this.audio.currentTime = 0;
    //     }
    // }
}

class Page1 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852183/kids-go-server-audio-slices/slice_62_r1hj23.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                Here's a situation that sometimes comes up. Notice that the White stone at A is in
                atari?
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5",
                white: "d4e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("d4", "A");
    }
}

class Page2 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854783/kids-go-server-COMBINED-audio-slices/slice_audio38_mlvvoo.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>Since Blue is capturing a stone and getting a liberty, playing at B is allowed.</p>,
            <p>But now Blue is in atari...</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e4",
                white: "e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("e4", "B");
    }
}

class Page3 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852173/kids-go-server-audio-slices/slice_65_gpvvns.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>So White could play at A again and capture Blue. But now White is in atari...</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5",
                white: "d4e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("d4", "A");
    }
}

class Page4 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854803/kids-go-server-COMBINED-audio-slices/slice_audio40_mtldvl.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>So Blue could capture, but then would be in atari again...</p>,
            <p>This could go on forever, so there is a special rule to cover it.</p>,
            <p>
                You can’t repeat the position. You can’t recreate the same exact pattern of stones
                on the board.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e4",
                white: "e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("e4", "B");
    }
}

class Page5 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852250/kids-go-server-audio-slices/slice_69_dinyyb.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                So the first player to capture in a position like this starts what is called a "ko".
                On this board, Blue would start a ko by capturing at 1.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5",
                white: "d4e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("d4", "A");
        goban.setMarkByPrettyCoord("e4", "1");
    }
}

class Page6 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852255/kids-go-server-audio-slices/slice_70_wwqk0a.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                The ko rule prevents a player from immediately recapturing. That would repeat the
                board. But it only affects the first move after a capture.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e4",
                white: "e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("d4", "triangle");
        goban.setMarkByPrettyCoord("e4", "1");
    }
}

class Page7 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707854795/kids-go-server-COMBINED-audio-slices/slice_audio43_meba67.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                So, White can play anywhere on the board except at the triangled point. Perhaps
                White will play at 2, and then Blue might play at say 3.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e4",
                white: "e3e5f4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("d4", "triangle");
        goban.setMarkByPrettyCoord("e4", "1");
        this.delay(() => {
            goban.engine.editPlace(4, 5, JGOFNumericPlayerColor.WHITE);
            goban.setMarkByPrettyCoord("d4", "triangle");
            goban.setMarkByPrettyCoord("e4", "1");
            goban.setMarkByPrettyCoord("e2", "2");
        });
        this.delay(() => {
            goban.engine.editPlace(4, 1, JGOFNumericPlayerColor.BLACK);
            goban.setMarkByPrettyCoord("d4", "triangle");
            goban.setMarkByPrettyCoord("e4", "1");
            goban.setMarkByPrettyCoord("e2", "2");
            goban.setMarkByPrettyCoord("e6", "3");
        });
    }
}

class Page8 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852272/kids-go-server-audio-slices/slice_73_k8hksh.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                Since the board has changed, a play at A is allowed. Now it’s Blue's turn to be
                caught by the rule of ko. Blue can play anywhere except the triangled point.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e6",
                white: "e3e5f4e2d4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("e4", "triangle");
        goban.setMarkByPrettyCoord("e2", "2");
        goban.setMarkByPrettyCoord("e6", "3");
        goban.setMarkByPrettyCoord("d4", "A");
    }
}

class Page9 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852178/kids-go-server-audio-slices/slice_74_hbb6np.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>So perhaps Blue will play at 1 to connect two stones and prevent a cut by White.</p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e6c3",
                white: "e3e5f4e2d4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("e4", "triangle");
        goban.setMarkByPrettyCoord("c3", "1");
    }
}

class Page10 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852276/kids-go-server-audio-slices/slice_75_gyn0dn.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                If White thinks the ko is more important, it can be filled in with 2. In this case,
                Blue actually gets a good solid position by playing at 3. So each side got
                something.
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "c4d3d5e6c3c6",
                white: "e3e5f4e2d4e4",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("c3", "1");
        goban.setMarkByPrettyCoord("e4", "2");
        goban.setMarkByPrettyCoord("c6", "3");
    }
}

class Page11 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852279/kids-go-server-audio-slices/slice_76_bcgtdu.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                Sometimes winning the ko can affect the life of a whole group. If Blue can capture
                and then fill the ko at A, the group will make two eyes. If White wins, all the Blue
                stones can be captured!
            </p>,
        ];
    }
    config(): PuzzleConfig {
        return {
            puzzle_player_move_mode: "fixed",
            initial_state: {
                black: "e7f7e6f5g6",
                white: "d6d7e5f4g5g3e3",
            },
        };
    }
    onSetGoban(goban: Goban): void {
        goban.setMarkByPrettyCoord("g4", "A");
    }
}

class Page12 extends Module4 {
    constructor() {
        super(
            "https://res.cloudinary.com/dn8rdavoi/video/upload/v1707852282/kids-go-server-audio-slices/slice_77_jfgnzq.wav",
        );
    }

    text(): JSX.Element | Array<JSX.Element> {
        return [
            <button onClick={this.playAudio}>Play Audio</button>,
            <p>
                Sometimes a ko is meaningless and only affects the stone in atari. Don't worry about
                ko too much for right now, just start playing some games and you'll learn more as
                you go. When you are ready, come back and do some more lessons.
            </p>,
        ];
    }
    axolotlFace() {
        return true;
    }
    hidePlayButton() {
        return true;
    }
}

export const module4: Array<typeof Content> = [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
];
