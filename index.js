var types = {
	Net: 'Net',
	InvoiceMonth: 'Invoice month',
	Paid: 'Paid',
	InvoiceWeekStartingSunday: 'Invoice week, starting Sunday',
	InvoiceWeekStartingMonday: 'Invoice week, starting Monday',
	CustomInvoiceDate: 'Custom days from invoice date',
	CustomMonthEnd: 'Custom days from month end',
	Fixed: 'Fixed due date'
};

var terms = [
	{
		id: 1,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_8DAYS',
		type: types.Net,
		days: 8
	},
	{
		id: 3,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_14DAYS',
		type: types.Net,
		days: 14
	},
	{
		id: 4,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_30DAYS',
		type: types.Net,
		days: 30
	},
	{
		id: 5,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_CUSTOM_INVOICE_DATE',
		shortNameTextId: 'SBA_SLS_DRAFT_INV_CUSTOMER_CREATION_POPUP_CUSTOM_TERMS_FROM_INVOICE_DATE_OPTION',
		type: types.CustomInvoiceDate
	},
	{
		id: 2,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_PREPAID',
		type: types.Paid,
		days: 0
	},
	{
		id: 6,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_CUSTOM_MONTH_END',
		shortNameTextId: 'SBA_SLS_DRAFT_INV_CUSTOMER_CREATION_POPUP_CUSTOM_TERMS_FROM_MONTH_END_OPTION',
		type: types.CustomMonthEnd
	},
	{
		id: 7,
		nameTextId: 'SBA_TERMS_OF_PAYMENT_FIXED',
		type: types.Fixed
	}
];

module.exports = {types: types, terms: terms};