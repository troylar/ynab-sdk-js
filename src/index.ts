import { Configuration } from "./configuration";
import * as CodeGen from "./api";
import utils from "./utils";

export * from "./api";
export { utils };

/**
 * The YNAB API client
 */
export class api {
  protected _configuration: Configuration;

  /**
   *
   * @param accessToken The access token used for authentication
   * @param endpointUrl The API endpoint URL (Optional)
   */
  public constructor(
    accessToken: string,
    endpointUrl: string = "https://api.youneedabudget.com/v1"
  ) {
    this._configuration = new Configuration(accessToken, endpointUrl);
  }

  protected _budgets: CodeGen.BudgetsApi;
  /**
   * /budgets endpoints interface
   */
  public get budgets(): CodeGen.BudgetsApi {
    if (!this._budgets) {
      this._budgets = new CodeGen.BudgetsApi(this._configuration);
    }
    return this._budgets;
  }

  protected _accounts: CodeGen.AccountsApi;
  /**
   * /budgets/{budget_id}/accounts endpoints interface
   */
  public get accounts(): CodeGen.AccountsApi {
    if (!this._accounts) {
      this._accounts = new CodeGen.AccountsApi(this._configuration);
    }
    return this._accounts;
  }

  protected _categories: CodeGen.CategoriesApi;
  /**
   * /budgets/{budget_id}/categories endpoints interface
   */
  public get categories(): CodeGen.CategoriesApi {
    if (!this._categories) {
      this._categories = new CodeGen.CategoriesApi(this._configuration);
    }
    return this._categories;
  }

  protected _months: CodeGen.MonthsApi;
  /**
   * /budgets/{budget_id}/months endpoints interface
   */
  public get months(): CodeGen.MonthsApi {
    if (!this._months) {
      this._months = new CodeGen.MonthsApi(this._configuration);
    }
    return this._months;
  }

  protected _payees: CodeGen.PayeesApi;
  /**
   * /budgets/{budget_id}/payees endpoints interface
   */
  public get payees(): CodeGen.PayeesApi {
    if (!this._payees) {
      this._payees = new CodeGen.PayeesApi(this._configuration);
    }

    return this._payees;
  }

  protected _payeeLocations: CodeGen.PayeeLocationsApi;
  /**
   * /budgets/{budget_id}/payee_locations endpoints interface
   */
  public get payeeLocations(): CodeGen.PayeeLocationsApi {
    if (!this._payeeLocations) {
      this._payeeLocations = new CodeGen.PayeeLocationsApi(this._configuration);
    }
    return this._payeeLocations;
  }

  protected _transactions: CodeGen.TransactionsApi;
  /**
   * /budgets/{budget_id}/transactions endpoints interface
   */
  public get transactions(): CodeGen.TransactionsApi {
    if (!this._transactions) {
      this._transactions = new CodeGen.TransactionsApi(this._configuration);
    }
    return this._transactions;
  }

  protected _scheduledTransactions: CodeGen.ScheduledTransactionsApi;
  /**
   * /budgets/{budget_id}/scheduled_transactions endpoints interface
   */
  public get scheduledTransactions(): CodeGen.ScheduledTransactionsApi {
    if (!this._scheduledTransactions) {
      this._scheduledTransactions = new CodeGen.ScheduledTransactionsApi(
        this._configuration
      );
    }
    return this._scheduledTransactions;
  }
}
