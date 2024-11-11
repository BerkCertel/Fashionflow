function Filter() {
  return (
    <div className="w-2/6">
      <div> Filter</div>
      <div className="flex items-center gap-2 w-full">
        <input className="border" type="number" placeholder="Min" />
        <input className="border" type="number" placeholder="Max" />
      </div>
    </div>
  );
}

export default Filter;
