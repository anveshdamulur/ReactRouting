import React from 'react';
import { Link } from 'react-router-dom';
const Post =()=>{
    return(
        <div className="panel panel-success">
        <div className="panel-heading">Post Pannel</div>
        <div className="panel-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex repellendus iusto nihil et nisi dolore, cumque reiciendis delectus eligendi omnis iure distinctio nostrum dolor necessitatibus eaque nesciunt. Officia, mollitia?
            <div>
                <h3>React</h3>
                <Link to='/post/react/?pageNo=1'>Details</Link>
                <h3>JavaScript</h3>
                <Link to='/post/javascript/?pageNo=2'>Details</Link>
                <h3>Node</h3>
                <Link to='/post/node/?pageNo=3'>Details</Link>
            </div>
        </div>

      </div>
    )
}

export default Post;