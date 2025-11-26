import {type Params, useParams} from "react-router-dom";
import type {IPost} from "../core/models/Post.ts";

type TProfileParams = Params<string>;

export default function Profile() {
    const {userName} = useParams<TProfileParams>();

    const post: IPost = {

    }

    return (
        <>
            <h1>Profile Page</h1>
            {userName && <p>Welcome, {userName}!</p>}
        </>
    );
}