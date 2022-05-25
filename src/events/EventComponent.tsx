const EventComponent: React.FC = () => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
    }
    const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e.dataTransfer);
        
    }
    return (
        <div>
            <h3>Event Component</h3>
            <input type="text" onChange={onChangeHandler} />
            <div draggable onDrag={onDragHandler}>Drag me!</div>
        </div>
    );
}

export default EventComponent;