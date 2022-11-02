import React from "react";
import {createRoot} from "react-dom/client";
import {faker} from '@faker-js/faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    <p>Are you sure you trynna do this??</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail img={faker.image.avatar()} author='Sam' time='6:00 PM' content='nice blog post'/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail img={faker.image.avatar()} author='John' time='10:00 PM' content='I love your work'/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail img={faker.image.avatar()} author='alex'  time='9:00 PM'  content='the best video I"ve soon on react'/>
            </ApprovalCard>

        </div>


    );
};


const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App/>)
