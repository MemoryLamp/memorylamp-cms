function SimpleTableHeading(props) {
  return <th class="border px-4 py-2">{props.text}</th>;
}

function SimpleTableData(props) {
  return <td class="border px-4 py-2">{props.text}</td>;
}

function SimpleTable() {
  return (
    <>
      <table class="">
        <tr>
          <SimpleTableHeading text="Code" />
          <SimpleTableHeading text="Name" />
        </tr>
        <tr>
          <SimpleTableData text="ESV" />
          <SimpleTableData text="English Standard Version" />
        </tr>
      </table>
    </>
  );
}

export default SimpleTable;
