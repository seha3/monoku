import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid
} from '@material-ui/core';
// import TodoForm from './components/TodoForm';
import ElevationCard from './components/ElevationCard';
import TodoList from './components/TodoList';
// import Input from './components/Input'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root}>
        <ElevationCard />
        <br/>
        <Typography>
          Añade las tareas que deseas realizar
        </Typography>
        <br/>
        <TodoList />
      </Grid>
      
    </div>
  );
}

export default App;
