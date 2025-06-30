export default {
  editor: {
    label: { en: 'Pagination', fr: 'Pagination' },
    icon: 'more-horizontal',
    bubble: { icon: 'more-horizontal' }
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On page change', fr: 'Lors du changement de page' } },
    { name: 'perPageChange', label: { en: 'On per page change', fr: 'Lors du changement d\'éléments par page' } }
  ],
  properties: {
    // Data
    total: {
      label: { en: 'Total items', fr: 'Total d\'éléments' },
      type: 'Number',
      defaultValue: 100,
      bindable: true,
      section: 'data'
    },
    perPage: {
      label: { en: 'Items per page', fr: 'Éléments par page' },
      type: 'Number',
      defaultValue: 10,
      bindable: true,
      section: 'data'
    },
    
    // Appearance
    size: {
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'appearance'
    },
    maxVisible: {
      label: { en: 'Max visible pages', fr: 'Pages visibles maximum' },
      type: 'Number',
      defaultValue: 5,
      bindable: true,
      section: 'appearance'
    },
    
    // Navigation
    showPrevious: {
      label: { en: 'Show previous button', fr: 'Afficher le bouton précédent' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'navigation'
    },
    showNext: {
      label: { en: 'Show next button', fr: 'Afficher le bouton suivant' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'navigation'
    },
    showPreviousText: {
      label: { en: 'Show previous text', fr: 'Afficher le texte précédent' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'navigation'
    },
    showNextText: {
      label: { en: 'Show next text', fr: 'Afficher le texte suivant' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'navigation'
    },
    previousText: {
      label: { en: 'Previous text', fr: 'Texte précédent' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'navigation'
    },
    nextText: {
      label: { en: 'Next text', fr: 'Texte suivant' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'navigation'
    },
    showFirstLast: {
      label: { en: 'Show first/last pages', fr: 'Afficher première/dernière page' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'navigation'
    },
    showEllipsis: {
      label: { en: 'Show ellipsis', fr: 'Afficher les points de suspension' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'navigation'
    },
    ellipsisText: {
      label: { en: 'Ellipsis text', fr: 'Texte des points de suspension' },
      type: 'Text',
      defaultValue: '…',
      bindable: true,
      section: 'navigation'
    },
    
    // Additional features
    showInfo: {
      label: { en: 'Show page info', fr: 'Afficher les informations de page' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'features'
    },
    infoTemplate: {
      label: { en: 'Info template', fr: 'Modèle d\'information' },
      type: 'Text',
      defaultValue: '{start}-{end} of {total}',
      bindable: true,
      multiLang: true,
      section: 'features'
    },
    showJumpTo: {
      label: { en: 'Show jump to page', fr: 'Afficher aller à la page' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'features'
    },
    jumpToText: {
      label: { en: 'Jump to text', fr: 'Texte aller à' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'features'
    },
    showPerPage: {
      label: { en: 'Show per page selector', fr: 'Afficher le sélecteur par page' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'features'
    },
    perPageText: {
      label: { en: 'Per page text', fr: 'Texte par page' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'features'
    },
    perPageOptions: {
      label: { en: 'Per page options', fr: 'Options par page' },
      type: 'Text',
      defaultValue: '5,10,20,50,100',
      bindable: true,
      section: 'features'
    },
    
    // Behavior
    disabled: {
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'behavior'
    },
    
    // Style classes
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style'
    },
    buttonClass: {
      label: { en: 'Button CSS class', fr: 'Classe CSS des boutons' },
      type: 'Text',
      section: 'style'
    },
    activeClass: {
      label: { en: 'Active button CSS class', fr: 'Classe CSS du bouton actif' },
      type: 'Text',
      section: 'style'
    },
    inactiveClass: {
      label: { en: 'Inactive button CSS class', fr: 'Classe CSS du bouton inactif' },
      type: 'Text',
      section: 'style'
    },
    previousClass: {
      label: { en: 'Previous button CSS class', fr: 'Classe CSS du bouton précédent' },
      type: 'Text',
      section: 'style'
    },
    nextClass: {
      label: { en: 'Next button CSS class', fr: 'Classe CSS du bouton suivant' },
      type: 'Text',
      section: 'style'
    },
    ellipsisClass: {
      label: { en: 'Ellipsis CSS class', fr: 'Classe CSS des points de suspension' },
      type: 'Text',
      section: 'style'
    },
    infoClass: {
      label: { en: 'Info CSS class', fr: 'Classe CSS des informations' },
      type: 'Text',
      section: 'style'
    },
    jumpToClass: {
      label: { en: 'Jump to CSS class', fr: 'Classe CSS aller à' },
      type: 'Text',
      section: 'style'
    },
    perPageClass: {
      label: { en: 'Per page CSS class', fr: 'Classe CSS par page' },
      type: 'Text',
      section: 'style'
    }
  },
  
  defaultContent: {
    total: 100,
    perPage: 10,
    size: 'default',
    maxVisible: 5,
    showPrevious: true,
    showNext: true,
    showPreviousText: false,
    showNextText: false,
    previousText: '',
    nextText: '',
    showFirstLast: true,
    showEllipsis: true,
    ellipsisText: '…',
    showInfo: false,
    infoTemplate: '{start}-{end} of {total}',
    showJumpTo: false,
    jumpToText: '',
    showPerPage: false,
    perPageText: '',
    perPageOptions: '5,10,20,50,100',
    disabled: false,
    customClass: '',
    buttonClass: '',
    activeClass: '',
    inactiveClass: '',
    previousClass: '',
    nextClass: '',
    ellipsisClass: '',
    infoClass: '',
    jumpToClass: '',
    perPageClass: ''
  },
  
  settingsOptions: {
    autoByContent: true
  },
  
  actions: [
    {
      label: { en: 'Go to page', fr: 'Aller à la page' },
      action: 'goToPage'
    },
    {
      label: { en: 'Jump to page', fr: 'Sauter à la page' },
      action: 'jumpToPage'
    }
  ]
} 