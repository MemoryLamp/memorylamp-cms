import SimpleTable from "../../../components/tables/SimpleTable";
import SimpleButton from "../../../components/buttons/SimpleButton";
import PageHeading from "../../../components/text-headings/PageHeading";

export default function VerseList() {
  return (
    <>
      <section className="container mx-auto">
        <div class="flex flex-row">
          <PageHeading text="Verses" />
        </div>
        <div class="flex flex-row-reverse">
          <SimpleButton text="New" />
        </div>
        <SimpleTable />
      </section>
    </>
  );
}
