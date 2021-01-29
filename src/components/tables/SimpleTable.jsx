function SimpleTableHeading(props) {
  return (
    <th
      scope="col"
      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {props.text}
    </th>
  );
}

function SimpleTableData(props) {
  return (
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{props.text}</div>
          <div class="text-sm text-gray-500">{props.subtitle}</div>
        </div>
      </div>
    </td>
  );
}

function SimpleTable() {
  return (
    <>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <SimpleTableHeading text="Code" />
                    <SimpleTableHeading text="Name" />
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <SimpleTableData text="ESV" />
                    <SimpleTableData text="English Standard Version" />
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleTable;
