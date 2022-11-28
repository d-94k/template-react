const Form = () => {
    return (
        <form>
            <label htmlFor="input1"></label>
            <input type="text" name="input1" />
            <label htmlFor="input2"></label>
            <input type="text" name="input2"/>
            <label htmlFor="input3"></label>
            <input type="text" name="input3"/>
            <label htmlFor="input4"></label>
            <input type="text" name="input4"/>
            <button type="submit">Add Item</button>
        </form>
    );
}
 
export default Form;