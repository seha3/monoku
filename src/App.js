import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import TodoForm from './components/TodoForm';
import ElevationCard from './components/ElevationCard';
import TodoList from './components/TodoList';
// import Input from './components/Input'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="todo-app">
      <div className={classes.root}>
        <br/>
        <br/>
        <ElevationCard />
        <br/>
        <Typography>
          Añade las tareas que deseas realizar
        </Typography>
        <br/>
        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
