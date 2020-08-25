import React, {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import components from '../helper/supportedComponents';
import getItem from '../helper/getItem';
import Typography from '@material-ui/core/Typography';
import CardComponent from './CardComponent';
import Divider from '@material-ui/core/Divider';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  let selected = sourceClone[droppableSource.index];
  let clone = Object.assign({}, selected);
  clone.id = `item-${
    droppableSource.index + droppableSource.droppableId
  }-${new Date().getTime()}`;
  destClone.splice(droppableDestination.index, 0, clone);
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

const remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'white',
  padding: grid,
  marginRight: 100,
  width: 250,
});

function DragAndDrop() {
  const [componentsState, setComponentsState] = useState([]);
  const onDragEnd = (result) => {
    const {source, destination} = result;

    // Se elimina componente si se dropea fuera del formulario o en la otra lista
    if (!destination || destination.droppableId === '0') {
      const result = remove(componentsState, source.index);
      return setComponentsState(result);
    }
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd && sInd === 1) {
      const items = reorder(componentsState, source.index, destination.index);
      setComponentsState(items);
    }
    if (sInd === 0 && dInd === 1) {
      const result = move(components, componentsState, source, destination);
      setComponentsState(result[dInd]);
    }
  };

  return (
    <div>
      <div style={{display: 'flex'}}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable key={0} droppableId={`${0}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}>
                <Typography>Lista de componentes disponibles</Typography>
                {components.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                        )}>
                        <CardComponent info={item} />
                        <Divider />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable key={1} droppableId={`${1}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}>
                <Typography>Formulario actual</Typography>
                {componentsState.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {getItem(item)}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default DragAndDrop;
