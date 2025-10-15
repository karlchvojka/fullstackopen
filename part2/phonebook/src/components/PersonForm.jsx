const PersonForm = ({ onSubmit, handleChange, values }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input name='name' value={values.name} onChange={handleChange} /><br/>
        number: <input name='number' value={values.number} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
