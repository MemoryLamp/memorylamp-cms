import SimpleTable from '../../components/tables/SimpleTable';
import SimpleButton from '../../components/buttons/SimpleButton';

function TranslationList() {
    return(
        <>
            <section class="container mx-auto">
                <h1>
                    Translations
                </h1>
                <SimpleButton name='New'></SimpleButton>
                <SimpleTable></SimpleTable>
            </section>
        </>
    );
}

export default TranslationList;