import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function RigCard(props) {
    return (
        <Card {...props}>
        {props.children}
        </Card>
    );
}
