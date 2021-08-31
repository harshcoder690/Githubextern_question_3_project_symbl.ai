import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

function UserCard(props) {

    const [isHovered, hoverEffect] = useState(false);

    function mouseIn() {
        hoverEffect(true);
    }

    function mouseOut() {
        hoverEffect(false);
    }

    const imageLarge={
        width:"250px", 
        height:"250px"
    };
    const imageSmall={
        width:"150px",
        height:"150px", 
        position:"absolute", 
        zIndex:"2", 
        right:"-30px", 
        top:"10%"
    };

    return (
        <div className="cards" style={{width:"330px", height:"290px"}} onMouseOver={mouseIn} onMouseOut={mouseOut}>
            <div >
                <img src={props.avatar} alt="" style={isHovered ? imageSmall : imageLarge} className="avatar rounded-circle d-block mx-auto" />
            </div>

            <Zoom in={isHovered} style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}>
            <Card style={{display: isHovered ? "block" : "none"}}>
                <CardActionArea>
                    <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                First Name &nbsp;&nbsp;&nbsp;
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.fName}
                            </Typography>
                            
                            <br />

                            <Typography gutterBottom variant="h6" component="h2">
                                Last Name &nbsp;&nbsp;&nbsp;
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.lName}
                            </Typography>
                                
                            <br />

                            <Typography gutterBottom variant="h6" component="h2">
                                Email &nbsp;&nbsp;&nbsp;
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.email}
                            </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Zoom>
        </div>
    );
}

export default UserCard;