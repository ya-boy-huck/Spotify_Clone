import React from "react";
import { playlistState } from "../atoms/playlistAtoms";
import { useRecoilValue } from "recoil";

function Songs() {
    const playlist = useRecoilValue(playlistState);
    return (
        <div className="text-white">
            {playlist?.tracks.items.map((tracks) => (
                <div>{tracks.track.name}</div>
            ))}
        </div>
    )
}

export default Songs;
