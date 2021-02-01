const PostDetails = (props)=>{
    console.log(props)
    return(
        <div className="panel panel-primary">
      <div className="panel-heading">{props.match.params.id}</div>
      <div className="panel-body">{props.match.params.id} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sapiente eum beatae excepturi impedit fugit? Ipsa placeat voluptate adipisci accusantium atque iusto, totam inventore consectetur, vitae eum porro distinctio beatae.</div>
      <h3>You are on Page number {(props.location.search).split('=')[1]}</h3>
    </div>  
    )
}

export default PostDetails;