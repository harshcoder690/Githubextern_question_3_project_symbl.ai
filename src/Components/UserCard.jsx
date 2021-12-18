import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function UserCard(props) {
    return (
        <div className="cards" style={{width:"330px", height:"290px"}}>
            <Card >
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
                                Id  &nbsp;&nbsp;&nbsp;
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.ID}
                            </Typography>
                                
                            <br />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default UserCard;