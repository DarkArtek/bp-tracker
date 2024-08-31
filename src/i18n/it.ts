export const it = {
    common: {
        error: "Errore",
        success: "Successo",
    },
    measurementForm: {
        editMeasurement: "Modifica misurazione",
        addMeasurement: "Aggiungi nuova misurazione",
        saveButton: "Salva",
        cancelButton: "Cancella",
        deleteButton: "Elimina",
        confirmDeleteText: "Si vuole eliminare questa misurazione?",
    },
    measurement: {
        createdAt: "Creata il",
        systolic: "Sistolica",
        diastolic: "Diastolica",
        heartRate: "Frequenza Cardiaca",
        whichArm: "Quale braccio",
        left: "Sinistro",
        right: "Destro",
    },
    measurementList: {
        title: "Misurazioni",
        actions: {
            notSupportedByBrowser: "Browser non supportato",
            createNew: "Nuova",
            export: "Esporta",
            import: "Importa",
            share: "Condividi",
            deleteAll: "Elimina tutto",
        },
        confirmDeleteText: "Questa azione elimina tutte le misurazioni fatte. Sicuri di voler procedere?",
    },
    menu: {
        aboutAndHelp: "About & Help",
        home: "Home",
        chart: "Diagramma",
    },
    aboutAndHelp: {
        intro: "Questa app è stata progettata per tenere traccia delle misurazioni della pressione arteriosa con facilità.",
        featuresIntro: "Ha queste funzioni:",
        feature0: "salvataggio delle misurazioni",
        feature1: "mizurazioni persistenti al caricamento delle pagine (vedi info sottostanti)",
        feature2: "esporta misurazioni in csv",
        feature3: "importa misurazioni da csv",
        feature4: "visuazlizza misurazioni come diagramma lineare",
        feature5: "modalità offline (vedi info)",
        dataPrivacyTitle: "Privacy",
        dataPrivacy:
            "Questa app vive solamente nel tuo browser e salva i dati dentro di esso. Questo non è il massimo della sicurezza. Se la app o il dispositivo viene compromesso, qualcuno potrebbe accedere ai dati. Questa app NON trasmette alcun dato in internet. Potrai verificarlo accedendo alla modalità sviluppatore e vedendo le chiamate di rete nella tab network (premi F12 e vai alla tab network), o ispezionando il codice su ",
        dataTitle: "Data",
        dataP1:
            "Questa app salva i dati nello storage locale del tuo browser. Significa che se apri questa app in un secondo momento e dallo stesso browser, troverai le misurazioni e potrai continuare ad aggiungere misurazioni.",
        dataP2:
            "Se apri questa app da un browser differente o un device differente, non troverai le misurazioni fatte fino ad ora. Alla cancellazione della cache, o uso della modalità incognito, tutti i dati verranno cancellati. In altri casi, troverai le misurazioni.",
        dataP3: "Si racconanda di creare backup regolari attravetso la funzione Import / Export.",
        dataP4: "Sei responsabile dei tuoi dati e della loro conservazione.",
        offlineTitle: "Utilizzo Offline",
        offlineContent:
            "Questa app funziona anche in modalità Offline. Una volta che si accede a questa app in modalità online, dovreste essere in grado di usarla anche in modalità Offline. Potrai usare la funzione del tuo browser mobile \"Aggiungi a  Home\" per un accesso più rapido.",
        feedbackTitle: "Feedback",
        feedback: "Siete i benvenuti a fornirmi feedback aprendo una issue su Github: ",
        openSauceTitle: "Open Source",
        openSauce1: "Il codice sorgente è libero e ha una licenza molto permissiva, lo troverete su",
        openSauce2: "Siete i benvenuti per fornirmi feedback, contribuire, fork, o qualsiasi altra cosa.",
        techInfosTitle: "Tech Info",
        techInfos:
            "Questa app è stata scritta in Vue3, usa Composition API, Pinia, Typescript and Primevue. Viene fatta gitare su Cloudflare Pages.",
    },
    consent: {
        title: "Privacy",
        intro: "Sembra che stai usando questa app per la prima volta. Continuando, accetti i seguenti termini:",
        appLivesInBrowser: "questa app vive solamente nel tuo browseer",
        doesntTransmitData: "questa app non trasmette i dati via internet",
        localStorageConsent:
            "questa app salva i dati nello storage locale del tuo browser. Significa che se apri questa app in un secondo momento e dallo stesso browser, troverai le misurazioni e potrai continuare ad aggiungere misurazioni. Usa a tuo rischio e pericolo",
        persistingLimited:
            "mentre questa app persiste nel tuo  browser salverò e caricherà le misurazioni ad ogni avvio. Questa funzione è limitata",
        responsibleForBackups:
            "Sei inoltre responsabile dei backup delle tue misurazioni usando la funzione import export e mantendendo i files al sicuro",
        noGuarantees: "questa app potrebbe contenere dei bug, non posso dare la mia parola che sia bug-free",
        accept: "Accetta",
        deny: "Rifiuta",
    },
    chart: {
        amountOfDataPoints: "Quanti dati?",
        chartsTitle: "Diagramma",
    },
    toasts: {
        errorWhileDeletingMeasurement: "problema durante eliminazione dei dati",
        successfullyDeletedMeasurement: "Misurazione cancellata",
        errorWhileLoadingMeasurement: "Caricamento della misurazione fallito",
        errorWhileImportingCsv: "A causa di un errrore nel tuo file CSV, il file non può essere importato :(",
    },
};