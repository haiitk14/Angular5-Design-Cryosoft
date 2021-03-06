/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { ViewLogin } from '../models/view-login';
import { Login } from '../models/login';
import { MeshParamDef } from '../models/mesh-param-def';
import { TempRecordPtsDef } from '../models/temp-record-pts-def';
import { CalculationParametersDef } from '../models/calculation-parameters-def';
import { CheckControlView } from '../models/check-control-view';
import { CheckControl } from '../models/check-control';
import { MeshParamDefSave } from '../models/mesh-param-def-save';
import { TempRecordPtsDefSave } from '../models/temp-record-pts-def-save';
import { CalculationParametersDefSave } from '../models/calculation-parameters-def-save';
import { OptimumCalculator } from '../models/optimum-calculator';
import { StartCalculate } from '../models/start-calculate';
import { BrainCalculator } from '../models/brain-calculator';
import { StartBrainCalculate } from '../models/start-brain-calculate';
import { ReferenceData } from '../models/reference-data';
import { Symbol } from '../models/symbol';
import { OptimumResultAna } from '../models/optimum-result-ana';
import { HeadBalanceResult } from '../models/head-balance-result';
import { HeadBalanceMaxResult } from '../models/head-balance-max-result';
import { EquipSizing } from '../models/equip-sizing';
import { EstimationHeadBalanceResult } from '../models/estimation-head-balance-result';
import { ViewTrCalculate } from '../models/view-tr-calculate';
import { ViewEquipTr } from '../models/view-equip-tr';
import { ConsumptionResult } from '../models/consumption-result';
import { EconomicResult } from '../models/economic-result';
import { StudyEquipment } from '../models/study-equipment';
import { TempRecordPts } from '../models/temp-record-pts';
import { ViewSizingResultOptimum } from '../models/view-sizing-result-optimum';
import { ViewSizingEstimationResult } from '../models/view-sizing-estimation-result';
import { ViewTemperatureProfile } from '../models/view-temperature-profile';
import { ViewHeatExchange } from '../models/view-heat-exchange';
import { ViewTimeBased } from '../models/view-time-based';
import { Translation } from '../models/translation';
import { ViewOpenStudy } from '../models/view-open-study';
import { Study } from '../models/study';
import { ViewStudyEquipment } from '../models/view-study-equipment';
import { Equipment } from '../models/equipment';
import { Production } from '../models/production';
import { Product } from '../models/product';
import { ViewProduct } from '../models/view-product';
import { ProductElmt } from '../models/product-elmt';
import { ViewComponents } from '../models/view-components';
import { Shape } from '../models/shape';
import { PackingElement } from '../models/packing-element';
import { PackingLayer } from '../models/packing-layer';
import { ViewPackingLayer } from '../models/view-packing-layer';
import { SavePackingLayer } from '../models/save-packing-layer';
import { ViewMesh } from '../models/view-mesh';
import { GenMeshParams } from '../models/gen-mesh-params';


@Injectable()
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body - The username/password
   */
  loginResponse(body: Login): Observable<HttpResponse<ViewLogin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewLogin = null;
        _body = _resp.body as ViewLogin
        return _resp.clone({body: _body}) as HttpResponse<ViewLogin>;
      })
    );
  }

  /**
   * @param body - The username/password
   */
  login(body: Login): Observable<ViewLogin> {
    return this.loginResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  logoutResponse(): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   */
  logout(): Observable<void> {
    return this.logoutResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  getMyMeshParamDefResponse(): Observable<HttpResponse<MeshParamDef>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/meshparamdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: MeshParamDef = null;
        _body = _resp.body as MeshParamDef
        return _resp.clone({body: _body}) as HttpResponse<MeshParamDef>;
      })
    );
  }

  /**
   */
  getMyMeshParamDef(): Observable<MeshParamDef> {
    return this.getMyMeshParamDefResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  getMyTempRecordPtsDefResponse(): Observable<HttpResponse<TempRecordPtsDef>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/temprecordptsdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: TempRecordPtsDef = null;
        _body = _resp.body as TempRecordPtsDef
        return _resp.clone({body: _body}) as HttpResponse<TempRecordPtsDef>;
      })
    );
  }

  /**
   */
  getMyTempRecordPtsDef(): Observable<TempRecordPtsDef> {
    return this.getMyTempRecordPtsDefResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  getMyCalculationParametersDefResponse(): Observable<HttpResponse<CalculationParametersDef>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/calculationparametersdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: CalculationParametersDef = null;
        _body = _resp.body as CalculationParametersDef
        return _resp.clone({body: _body}) as HttpResponse<CalculationParametersDef>;
      })
    );
  }

  /**
   */
  getMyCalculationParametersDef(): Observable<CalculationParametersDef> {
    return this.getMyCalculationParametersDefResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get array checkcontrol
   * @param idStudy - undefined
   * @param idProd - undefined
   */
  checkControlViewResponse(params: ApiService.CheckControlViewParams): Observable<HttpResponse<CheckControlView>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    if (params.idProd != null) __params = __params.set("idProd", params.idProd.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/checkcontrolview`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: CheckControlView = null;
        _body = _resp.body as CheckControlView
        return _resp.clone({body: _body}) as HttpResponse<CheckControlView>;
      })
    );
  }

  /**
   * get array checkcontrol
   * @param idStudy - undefined
   * @param idProd - undefined
   */
  checkControlView(params: ApiService.CheckControlViewParams): Observable<CheckControlView> {
    return this.checkControlViewResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get checkcontrol
   * @param idStudy - undefined
   * @param idProd - undefined
   */
  checkControlResponse(params: ApiService.CheckControlParams): Observable<HttpResponse<CheckControl>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    if (params.idProd != null) __params = __params.set("idProd", params.idProd.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/checkcontrol`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: CheckControl = null;
        _body = _resp.body as CheckControl
        return _resp.clone({body: _body}) as HttpResponse<CheckControl>;
      })
    );
  }

  /**
   * get checkcontrol
   * @param idStudy - undefined
   * @param idProd - undefined
   */
  checkControl(params: ApiService.CheckControlParams): Observable<CheckControl> {
    return this.checkControlResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * save MeshParamDef
   * @param body - body save meshParamDef
   */
  saveMyMeshParamDefResponse(body: MeshParamDefSave): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/savemeshparamdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * save MeshParamDef
   * @param body - body save meshParamDef
   */
  saveMyMeshParamDef(body: MeshParamDefSave): Observable<void> {
    return this.saveMyMeshParamDefResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * save TempRecordPtsDef by id
   * @param body - body save TempRecordPtsDef
   */
  saveMyTempRecordPtsDefResponse(body: TempRecordPtsDefSave): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/savetemprecordptsdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * save TempRecordPtsDef by id
   * @param body - body save TempRecordPtsDef
   */
  saveMyTempRecordPtsDef(body: TempRecordPtsDefSave): Observable<void> {
    return this.saveMyTempRecordPtsDefResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * save CalculationParametersDef by id
   * @param body - body save CalculationParametersDef
   */
  saveMyCalculationParametersDefResponse(body: CalculationParametersDefSave): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/savecalculationparametersdef`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * save CalculationParametersDef by id
   * @param body - body save CalculationParametersDef
   */
  saveMyCalculationParametersDef(body: CalculationParametersDefSave): Observable<void> {
    return this.saveMyCalculationParametersDefResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get optimumcalculator
   * @param idStudyEquipment - undefined
   * @param idStudy - undefined
   */
  getOptimumCalculatorResponse(params: ApiService.GetOptimumCalculatorParams): Observable<HttpResponse<OptimumCalculator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudyEquipment != null) __params = __params.set("idStudyEquipment", params.idStudyEquipment.toString());
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/optimumcalculator`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: OptimumCalculator = null;
        _body = _resp.body as OptimumCalculator
        return _resp.clone({body: _body}) as HttpResponse<OptimumCalculator>;
      })
    );
  }

  /**
   * get optimumcalculator
   * @param idStudyEquipment - undefined
   * @param idStudy - undefined
   */
  getOptimumCalculator(params: ApiService.GetOptimumCalculatorParams): Observable<OptimumCalculator> {
    return this.getOptimumCalculatorResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Run Kernal calculate
   * @param body - body save startCalculate
   */
  startCalculateResponse(body: StartCalculate): Observable<HttpResponse<number[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/startcalculate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: number[] = null;
        _body = _resp.body as number[]
        return _resp.clone({body: _body}) as HttpResponse<number[]>;
      })
    );
  }

  /**
   * Run Kernal calculate
   * @param body - body save startCalculate
   */
  startCalculate(body: StartCalculate): Observable<number[]> {
    return this.startCalculateResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - Study ID
   */
  startStudyCalculationResponse(id: number): Observable<HttpResponse<number[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/calculate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: number[] = null;
        _body = _resp.body as number[]
        return _resp.clone({body: _body}) as HttpResponse<number[]>;
      })
    );
  }

  /**
   * @param id - Study ID
   */
  startStudyCalculation(id: number): Observable<number[]> {
    return this.startStudyCalculationResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param idStudyEquipment - undefined
   * @param idStudy - undefined
   * @param checkOptim - undefined
   */
  getStudyEquipmentCalculationResponse(params: ApiService.GetStudyEquipmentCalculationParams): Observable<HttpResponse<BrainCalculator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudyEquipment != null) __params = __params.set("idStudyEquipment", params.idStudyEquipment.toString());
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    if (params.checkOptim != null) __params = __params.set("checkOptim", params.checkOptim.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studyequipment/braincalculate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: BrainCalculator = null;
        _body = _resp.body as BrainCalculator
        return _resp.clone({body: _body}) as HttpResponse<BrainCalculator>;
      })
    );
  }

  /**
   * @param idStudyEquipment - undefined
   * @param idStudy - undefined
   * @param checkOptim - undefined
   */
  getStudyEquipmentCalculation(params: ApiService.GetStudyEquipmentCalculationParams): Observable<BrainCalculator> {
    return this.getStudyEquipmentCalculationResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Run Kernal Brain Calculate
   * @param body - body save startBrainCalculate
   */
  startBrainCalculateResponse(body: StartBrainCalculate): Observable<HttpResponse<number[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/studyequipment/startbraincalculate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: number[] = null;
        _body = _resp.body as number[]
        return _resp.clone({body: _body}) as HttpResponse<number[]>;
      })
    );
  }

  /**
   * Run Kernal Brain Calculate
   * @param body - body save startBrainCalculate
   */
  startBrainCalculate(body: StartBrainCalculate): Observable<number[]> {
    return this.startBrainCalculateResponse(body).pipe(
      map(_r => _r.body)
    );
  }
  /**
   */
  getRefenceDataResponse(): Observable<HttpResponse<ReferenceData>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/reference`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ReferenceData = null;
        _body = _resp.body as ReferenceData
        return _resp.clone({body: _body}) as HttpResponse<ReferenceData>;
      })
    );
  }

  /**
   */
  getRefenceData(): Observable<ReferenceData> {
    return this.getRefenceDataResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get symbol study
   * @param idStudy - Study ID
   */
  getSymbolResponse(idStudy: number): Observable<HttpResponse<Symbol>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/symbol/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Symbol = null;
        _body = _resp.body as Symbol
        return _resp.clone({body: _body}) as HttpResponse<Symbol>;
      })
    );
  }

  /**
   * get symbol study
   * @param idStudy - Study ID
   */
  getSymbol(idStudy: number): Observable<Symbol> {
    return this.getSymbolResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get pro info study
   * @param idStudy - Study ID
   */
  getProInfoStudyResponse(idStudy: number): Observable<HttpResponse<OptimumResultAna>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/proInfoStudy/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: OptimumResultAna = null;
        _body = _resp.body as OptimumResultAna
        return _resp.clone({body: _body}) as HttpResponse<OptimumResultAna>;
      })
    );
  }

  /**
   * get pro info study
   * @param idStudy - Study ID
   */
  getProInfoStudy(idStudy: number): Observable<OptimumResultAna> {
    return this.getProInfoStudyResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get optimum head balance
   * @param idStudy - Study ID
   */
  getOptimumHeadBalanceResponse(idStudy: number): Observable<HttpResponse<HeadBalanceResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/optimum/headBalance/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: HeadBalanceResult = null;
        _body = _resp.body as HeadBalanceResult
        return _resp.clone({body: _body}) as HttpResponse<HeadBalanceResult>;
      })
    );
  }

  /**
   * get optimum head balance
   * @param idStudy - Study ID
   */
  getOptimumHeadBalance(idStudy: number): Observable<HeadBalanceResult> {
    return this.getOptimumHeadBalanceResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get optimum head balance max
   * @param idStudy - get optimum head balance max results
   */
  getOptimumHeadBalanceMaxResponse(idStudy: number): Observable<HttpResponse<HeadBalanceMaxResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/optimum/headBalanceMax/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: HeadBalanceMaxResult = null;
        _body = _resp.body as HeadBalanceMaxResult
        return _resp.clone({body: _body}) as HttpResponse<HeadBalanceMaxResult>;
      })
    );
  }

  /**
   * get optimum head balance max
   * @param idStudy - get optimum head balance max results
   */
  getOptimumHeadBalanceMax(idStudy: number): Observable<HeadBalanceMaxResult> {
    return this.getOptimumHeadBalanceMaxResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get equip sizing
   * @param idStudyEquipment - StudyEquipment ID
   */
  getEquipSizingResponse(idStudyEquipment: number): Observable<HttpResponse<EquipSizing>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/optimum/equipSizing/${idStudyEquipment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: EquipSizing = null;
        _body = _resp.body as EquipSizing
        return _resp.clone({body: _body}) as HttpResponse<EquipSizing>;
      })
    );
  }

  /**
   * get equip sizing
   * @param idStudyEquipment - StudyEquipment ID
   */
  getEquipSizing(idStudyEquipment: number): Observable<EquipSizing> {
    return this.getEquipSizingResponse(idStudyEquipment).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get estimation head balance
   * @param idStudy - Study ID
   * @param tr - Control temperature
   */
  getEstimationHeadBalanceResponse(params: ApiService.GetEstimationHeadBalanceParams): Observable<HttpResponse<EstimationHeadBalanceResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    if (params.tr != null) __params = __params.set("tr", params.tr.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/estimation/headBalance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: EstimationHeadBalanceResult = null;
        _body = _resp.body as EstimationHeadBalanceResult
        return _resp.clone({body: _body}) as HttpResponse<EstimationHeadBalanceResult>;
      })
    );
  }

  /**
   * get estimation head balance
   * @param idStudy - Study ID
   * @param tr - Control temperature
   */
  getEstimationHeadBalance(params: ApiService.GetEstimationHeadBalanceParams): Observable<EstimationHeadBalanceResult> {
    return this.getEstimationHeadBalanceResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get temperature calculation data
   * @param idStudyEquipment - StudyEquipment ID
   */
  temperatureCalculationResponse(idStudyEquipment: number): Observable<HttpResponse<ViewTrCalculate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/estimation/trCalculate/${idStudyEquipment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewTrCalculate = null;
        _body = _resp.body as ViewTrCalculate
        return _resp.clone({body: _body}) as HttpResponse<ViewTrCalculate>;
      })
    );
  }

  /**
   * get temperature calculation data
   * @param idStudyEquipment - StudyEquipment ID
   */
  temperatureCalculation(idStudyEquipment: number): Observable<ViewTrCalculate> {
    return this.temperatureCalculationResponse(idStudyEquipment).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * view Equipment Temperature
   * @param idStudyEquipment - StudyEquipment ID
   */
  viewEquipTrResponse(idStudyEquipment: number): Observable<HttpResponse<ViewEquipTr>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/estimation/viewEquipTr/${idStudyEquipment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewEquipTr = null;
        _body = _resp.body as ViewEquipTr
        return _resp.clone({body: _body}) as HttpResponse<ViewEquipTr>;
      })
    );
  }

  /**
   * view Equipment Temperature
   * @param idStudyEquipment - StudyEquipment ID
   */
  viewEquipTr(idStudyEquipment: number): Observable<ViewEquipTr> {
    return this.viewEquipTrResponse(idStudyEquipment).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get consumption results
   * @param idStudy - Study ID
   */
  getAnalyticalConsumptionResponse(idStudy: number): Observable<HttpResponse<ConsumptionResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/common/consumption/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ConsumptionResult = null;
        _body = _resp.body as ConsumptionResult
        return _resp.clone({body: _body}) as HttpResponse<ConsumptionResult>;
      })
    );
  }

  /**
   * get consumption results
   * @param idStudy - Study ID
   */
  getAnalyticalConsumption(idStudy: number): Observable<ConsumptionResult> {
    return this.getAnalyticalConsumptionResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get economic results
   * @param idStudy - Study ID
   */
  getAnalyticalEconomicResponse(idStudy: number): Observable<HttpResponse<EconomicResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/common/economic/${idStudy}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: EconomicResult = null;
        _body = _resp.body as EconomicResult
        return _resp.clone({body: _body}) as HttpResponse<EconomicResult>;
      })
    );
  }

  /**
   * get economic results
   * @param idStudy - Study ID
   */
  getAnalyticalEconomic(idStudy: number): Observable<EconomicResult> {
    return this.getAnalyticalEconomicResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get study equipment product chart
   * @param id - StudyEquipment ID
   */
  getstudyEquipmentProductChartResponse(id: number): Observable<HttpResponse<StudyEquipment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studyEquipment/${id}/productChart`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: StudyEquipment = null;
        _body = _resp.body as StudyEquipment
        return _resp.clone({body: _body}) as HttpResponse<StudyEquipment>;
      })
    );
  }

  /**
   * get study equipment product chart
   * @param id - StudyEquipment ID
   */
  getstudyEquipmentProductChart(id: number): Observable<StudyEquipment> {
    return this.getstudyEquipmentProductChartResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  getTempRecordPtsResponse(id: number): Observable<HttpResponse<TempRecordPts>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/tempRecordPts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: TempRecordPts = null;
        _body = _resp.body as TempRecordPts
        return _resp.clone({body: _body}) as HttpResponse<TempRecordPts>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  getTempRecordPts(id: number): Observable<TempRecordPts> {
    return this.getTempRecordPtsResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get sizng result optimum
   * @param idStudy - Study ID
   */
  sizingOptimumResultResponse(idStudy: number): Observable<HttpResponse<ViewSizingResultOptimum>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/output/sizingresult/${idStudy}/optimum`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewSizingResultOptimum = null;
        _body = _resp.body as ViewSizingResultOptimum
        return _resp.clone({body: _body}) as HttpResponse<ViewSizingResultOptimum>;
      })
    );
  }

  /**
   * get sizng result optimum
   * @param idStudy - Study ID
   */
  sizingOptimumResult(idStudy: number): Observable<ViewSizingResultOptimum> {
    return this.sizingOptimumResultResponse(idStudy).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * sizing result estimation
   * @param idStudy - Study ID
   * @param tr - Control temperature
   */
  sizingEstimationResultResponse(params: ApiService.SizingEstimationResultParams): Observable<HttpResponse<ViewSizingEstimationResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    if (params.tr != null) __params = __params.set("tr", params.tr.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/output/sizingresult/estimation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewSizingEstimationResult = null;
        _body = _resp.body as ViewSizingEstimationResult
        return _resp.clone({body: _body}) as HttpResponse<ViewSizingEstimationResult>;
      })
    );
  }

  /**
   * sizing result estimation
   * @param idStudy - Study ID
   * @param tr - Control temperature
   */
  sizingEstimationResult(params: ApiService.SizingEstimationResultParams): Observable<ViewSizingEstimationResult> {
    return this.sizingEstimationResultResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get temperature profile
   * @param idStudyEquipment - StudyEquipment ID
   */
  temperatureProfileResponse(idStudyEquipment: number): Observable<HttpResponse<ViewTemperatureProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/output/temperatureProfile/${idStudyEquipment}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewTemperatureProfile = null;
        _body = _resp.body as ViewTemperatureProfile
        return _resp.clone({body: _body}) as HttpResponse<ViewTemperatureProfile>;
      })
    );
  }

  /**
   * get temperature profile
   * @param idStudyEquipment - StudyEquipment ID
   */
  temperatureProfile(idStudyEquipment: number): Observable<ViewTemperatureProfile> {
    return this.temperatureProfileResponse(idStudyEquipment).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get heat exchange product chart
   * @param idStudyEquipment - StudyEquipment ID
   * @param idStudy - Study ID
   */
  heatExchangeResponse(params: ApiService.HeatExchangeParams): Observable<HttpResponse<ViewHeatExchange>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudyEquipment != null) __params = __params.set("idStudyEquipment", params.idStudyEquipment.toString());
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/output/heatExchange`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewHeatExchange = null;
        _body = _resp.body as ViewHeatExchange
        return _resp.clone({body: _body}) as HttpResponse<ViewHeatExchange>;
      })
    );
  }

  /**
   * get heat exchange product chart
   * @param idStudyEquipment - StudyEquipment ID
   * @param idStudy - Study ID
   */
  heatExchange(params: ApiService.HeatExchangeParams): Observable<ViewHeatExchange> {
    return this.heatExchangeResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get item based product chart
   * @param idStudyEquipment - StudyEquipment ID
   * @param idStudy - Study ID
   */
  timeBasedResponse(params: ApiService.TimeBasedParams): Observable<HttpResponse<ViewTimeBased>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idStudyEquipment != null) __params = __params.set("idStudyEquipment", params.idStudyEquipment.toString());
    if (params.idStudy != null) __params = __params.set("idStudy", params.idStudy.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/output/timeBased`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewTimeBased = null;
        _body = _resp.body as ViewTimeBased
        return _resp.clone({body: _body}) as HttpResponse<ViewTimeBased>;
      })
    );
  }

  /**
   * get item based product chart
   * @param idStudyEquipment - StudyEquipment ID
   * @param idStudy - Study ID
   */
  timeBased(params: ApiService.TimeBasedParams): Observable<ViewTimeBased> {
    return this.timeBasedResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param lang - undefined
   */
  getComponentTranslationsResponse(lang: string): Observable<HttpResponse<Translation[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/translations/${lang}/components`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Translation[] = null;
        _body = _resp.body as Translation[]
        return _resp.clone({body: _body}) as HttpResponse<Translation[]>;
      })
    );
  }

  /**
   * @param lang - undefined
   */
  getComponentTranslations(lang: string): Observable<Translation[]> {
    return this.getComponentTranslationsResponse(lang).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param lang - undefined
   */
  getPackingTranslationsResponse(lang: string): Observable<HttpResponse<Translation[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/translations/${lang}/packings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Translation[] = null;
        _body = _resp.body as Translation[]
        return _resp.clone({body: _body}) as HttpResponse<Translation[]>;
      })
    );
  }

  /**
   * @param lang - undefined
   */
  getPackingTranslations(lang: string): Observable<Translation[]> {
    return this.getPackingTranslationsResponse(lang).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * Get a list of studies
   */
  findStudiesResponse(): Observable<HttpResponse<ViewOpenStudy>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewOpenStudy = null;
        _body = _resp.body as ViewOpenStudy
        return _resp.clone({body: _body}) as HttpResponse<ViewOpenStudy>;
      })
    );
  }

  /**
   * Get a list of studies
   */
  findStudies(): Observable<ViewOpenStudy> {
    return this.findStudiesResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * create a new study
   * @param study - The study to create.
   */
  createStudyResponse(study?: Study): Observable<HttpResponse<Study>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = study;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/studies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Study = null;
        _body = _resp.body as Study
        return _resp.clone({body: _body}) as HttpResponse<Study>;
      })
    );
  }

  /**
   * create a new study
   * @param study - The study to create.
   */
  createStudy(study?: Study): Observable<Study> {
    return this.createStudyResponse(study).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - Study ID
   */
  getStudyByIdResponse(id: number): Observable<HttpResponse<Study>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Study = null;
        _body = _resp.body as Study
        return _resp.clone({body: _body}) as HttpResponse<Study>;
      })
    );
  }

  /**
   * @param id - Study ID
   */
  getStudyById(id: number): Observable<Study> {
    return this.getStudyByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - Study ID
   */
  deleteStudyByIdResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/studies/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - Study ID
   */
  deleteStudyById(id: number): Observable<void> {
    return this.deleteStudyByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - Study ID
   * @param body - undefined
   */
  saveStudyResponse(params: ApiService.SaveStudyParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.body;
    let req = new HttpRequest<any>(
      "PATCH",
      this.rootUrl + `/studies/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - Study ID
   * @param body - undefined
   */
  saveStudy(params: ApiService.SaveStudyParams): Observable<void> {
    return this.saveStudyResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - id study to open
   */
  openStudyResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/open`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - id study to open
   */
  openStudy(id: number): Observable<void> {
    return this.openStudyResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - study ID
   * @param name - product name
   * @param dim3 - dim3
   * @param dim2 - dim2
   * @param dim1 - dim1
   */
  updateProductResponse(params: ApiService.UpdateProductParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    
    
    
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/studies/${params.id}/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - study ID
   * @param name - product name
   * @param dim3 - dim3
   * @param dim2 - dim2
   * @param dim1 - dim1
   */
  updateProduct(params: ApiService.UpdateProductParams): Observable<void> {
    return this.updateProductResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param name - product name
   * @param id - study ID
   */
  newProductResponse(params: ApiService.NewProductParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.name != null) __params = __params.set("name", params.name.toString());
    
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/studies/${params.id}/product`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param name - product name
   * @param id - study ID
   */
  newProduct(params: ApiService.NewProductParams): Observable<void> {
    return this.newProductResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - refresh mesh of study
   */
  refreshMeshResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/refreshMesh`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - refresh mesh of study
   */
  refreshMesh(id: number): Observable<void> {
    return this.refreshMeshResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  getStudyEquipmentsResponse(id: number): Observable<HttpResponse<ViewStudyEquipment[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/equipments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewStudyEquipment[] = null;
        _body = _resp.body as ViewStudyEquipment[]
        return _resp.clone({body: _body}) as HttpResponse<ViewStudyEquipment[]>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  getStudyEquipments(id: number): Observable<ViewStudyEquipment[]> {
    return this.getStudyEquipmentsResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param idEquip - undefined
   * @param id - undefined
   */
  addEquipmentResponse(params: ApiService.AddEquipmentParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.idEquip != null) __params = __params.set("idEquip", params.idEquip.toString());
    
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/studies/${params.id}/equipments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param idEquip - undefined
   * @param id - undefined
   */
  addEquipment(params: ApiService.AddEquipmentParams): Observable<void> {
    return this.addEquipmentResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param name - new study name.
   * @param id - id study to open.
   */
  saveStudyAsResponse(params: ApiService.SaveStudyAsParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/studies/${params.id}/clone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param name - new study name.
   * @param id - id study to open.
   */
  saveStudyAs(params: ApiService.SaveStudyAsParams): Observable<void> {
    return this.saveStudyAsResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get all available equipments
   * @param size - undefined
   * @param process_type - undefined
   * @param model - undefined
   * @param manufacturer - undefined
   * @param family - undefined
   * @param equip_origin - undefined
   * @param energy - undefined
   */
  getEquipmentsResponse(params: ApiService.GetEquipmentsParams): Observable<HttpResponse<Equipment[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set("size", params.size.toString());
    if (params.processType != null) __params = __params.set("process_type", params.processType.toString());
    if (params.model != null) __params = __params.set("model", params.model.toString());
    if (params.manufacturer != null) __params = __params.set("manufacturer", params.manufacturer.toString());
    if (params.family != null) __params = __params.set("family", params.family.toString());
    if (params.equipOrigin != null) __params = __params.set("equip_origin", params.equipOrigin.toString());
    if (params.energy != null) __params = __params.set("energy", params.energy.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/equipments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Equipment[] = null;
        _body = _resp.body as Equipment[]
        return _resp.clone({body: _body}) as HttpResponse<Equipment[]>;
      })
    );
  }

  /**
   * get all available equipments
   * @param size - undefined
   * @param process_type - undefined
   * @param model - undefined
   * @param manufacturer - undefined
   * @param family - undefined
   * @param equip_origin - undefined
   * @param energy - undefined
   */
  getEquipments(params: ApiService.GetEquipmentsParams): Observable<Equipment[]> {
    return this.getEquipmentsResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get equipment by id
   * @param id - Equipment ID
   */
  getEquipmentByIdResponse(id: number): Observable<HttpResponse<Equipment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/equipments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Equipment = null;
        _body = _resp.body as Equipment
        return _resp.clone({body: _body}) as HttpResponse<Equipment>;
      })
    );
  }

  /**
   * get equipment by id
   * @param id - Equipment ID
   */
  getEquipmentById(id: number): Observable<Equipment> {
    return this.getEquipmentByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get study equipment by id
   * @param id - StudyEquipment ID
   */
  getStudyEquipmentByIdResponse(id: number): Observable<HttpResponse<StudyEquipment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studyEquipment/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: StudyEquipment = null;
        _body = _resp.body as StudyEquipment
        return _resp.clone({body: _body}) as HttpResponse<StudyEquipment>;
      })
    );
  }

  /**
   * get study equipment by id
   * @param id - StudyEquipment ID
   */
  getStudyEquipmentById(id: number): Observable<StudyEquipment> {
    return this.getStudyEquipmentByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get production by id
   * @param id - Production ID
   */
  getProductionByIdResponse(id: number): Observable<HttpResponse<Production>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/productions/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Production = null;
        _body = _resp.body as Production
        return _resp.clone({body: _body}) as HttpResponse<Production>;
      })
    );
  }

  /**
   * get production by id
   * @param id - Production ID
   */
  getProductionById(id: number): Observable<Production> {
    return this.getProductionByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - Production ID
   * @param body - todo
   */
  saveProductionResponse(params: ApiService.SaveProductionParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.body;
    let req = new HttpRequest<any>(
      "PATCH",
      this.rootUrl + `/productions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - Production ID
   * @param body - todo
   */
  saveProduction(params: ApiService.SaveProductionParams): Observable<void> {
    return this.saveProductionResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get product by id
   * @param id - Product ID
   */
  getProductByIdResponse(id: number): Observable<HttpResponse<Product>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Product = null;
        _body = _resp.body as Product
        return _resp.clone({body: _body}) as HttpResponse<Product>;
      })
    );
  }

  /**
   * get product by id
   * @param id - Product ID
   */
  getProductById(id: number): Observable<Product> {
    return this.getProductByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get product view model
   * @param id - Product ID
   */
  getProductViewModelResponse(id: number): Observable<HttpResponse<ViewProduct>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/products/${id}/view`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewProduct = null;
        _body = _resp.body as ViewProduct
        return _resp.clone({body: _body}) as HttpResponse<ViewProduct>;
      })
    );
  }

  /**
   * get product view model
   * @param id - Product ID
   */
  getProductViewModel(id: number): Observable<ViewProduct> {
    return this.getProductViewModelResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get elements of a products
   * @param id - Product ID
   */
  getElementsByProductIdResponse(id: number): Observable<HttpResponse<ProductElmt[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/products/${id}/elements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ProductElmt[] = null;
        _body = _resp.body as ProductElmt[]
        return _resp.clone({body: _body}) as HttpResponse<ProductElmt[]>;
      })
    );
  }

  /**
   * get elements of a products
   * @param id - Product ID
   */
  getElementsByProductId(id: number): Observable<ProductElmt[]> {
    return this.getElementsByProductIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * update elements to product
   * @param id - Product ID
   * @param elementId - undefined
   * @param dim2 - undefined
   * @param description - undefined
   */
  updateProductElementResponse(params: ApiService.UpdateProductElementParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    if (params.elementId != null) __params = __params.set("elementId", params.elementId.toString());
    if (params.dim2 != null) __params = __params.set("dim2", params.dim2.toString());
    if (params.description != null) __params = __params.set("description", params.description.toString());
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/products/${params.id}/elements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * update elements to product
   * @param id - Product ID
   * @param elementId - undefined
   * @param dim2 - undefined
   * @param description - undefined
   */
  updateProductElement(params: ApiService.UpdateProductElementParams): Observable<void> {
    return this.updateProductElementResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * append elements to product
   * @param shapeId - undefined
   * @param id - Product ID
   * @param componentId - undefined
   * @param dim3 - undefined
   * @param dim1 - undefined
   */
  appendElementsToProductResponse(params: ApiService.AppendElementsToProductParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.shapeId != null) __params = __params.set("shapeId", params.shapeId.toString());
    
    if (params.componentId != null) __params = __params.set("componentId", params.componentId.toString());
    if (params.dim3 != null) __params = __params.set("dim3", params.dim3.toString());
    if (params.dim1 != null) __params = __params.set("dim1", params.dim1.toString());
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/products/${params.id}/elements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * append elements to product
   * @param shapeId - undefined
   * @param id - Product ID
   * @param componentId - undefined
   * @param dim3 - undefined
   * @param dim1 - undefined
   */
  appendElementsToProduct(params: ApiService.AppendElementsToProductParams): Observable<void> {
    return this.appendElementsToProductResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * remove a product element
   * @param id - Product ID
   * @param elementId - undefined
   */
  removeProductElementResponse(params: ApiService.RemoveProductElementParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    if (params.elementId != null) __params = __params.set("elementId", params.elementId.toString());
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/products/${params.id}/elements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * remove a product element
   * @param id - Product ID
   * @param elementId - undefined
   */
  removeProductElement(params: ApiService.RemoveProductElementParams): Observable<void> {
    return this.removeProductElementResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * move a product element up
   * @param id - element ID
   */
  productElementMoveUpResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/productElmts/${id}/moveup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * move a product element up
   * @param id - element ID
   */
  productElementMoveUp(id: number): Observable<void> {
    return this.productElementMoveUpResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * move a product element down
   * @param id - element ID
   */
  productElementMoveDownResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/productElmts/${id}/movedown`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * move a product element down
   * @param id - element ID
   */
  productElementMoveDown(id: number): Observable<void> {
    return this.productElementMoveDownResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * find available components by filter
   * @param waterpercent - undefined
   * @param subfamily - undefined
   * @param compfamily - undefined
   */
  findComponentsResponse(params: ApiService.FindComponentsParams): Observable<HttpResponse<ViewComponents>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.waterpercent != null) __params = __params.set("waterpercent", params.waterpercent.toString());
    if (params.subfamily != null) __params = __params.set("subfamily", params.subfamily.toString());
    if (params.compfamily != null) __params = __params.set("compfamily", params.compfamily.toString());
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/components`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewComponents = null;
        _body = _resp.body as ViewComponents
        return _resp.clone({body: _body}) as HttpResponse<ViewComponents>;
      })
    );
  }

  /**
   * find available components by filter
   * @param waterpercent - undefined
   * @param subfamily - undefined
   * @param compfamily - undefined
   */
  findComponents(params: ApiService.FindComponentsParams): Observable<ViewComponents> {
    return this.findComponentsResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * todo
   */
  getUsersResponse(): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * todo
   */
  getUsers(): Observable<void> {
    return this.getUsersResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get available shapes
   */
  getShapesResponse(): Observable<HttpResponse<Shape[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/shapes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Shape[] = null;
        _body = _resp.body as Shape[]
        return _resp.clone({body: _body}) as HttpResponse<Shape[]>;
      })
    );
  }

  /**
   * get available shapes
   */
  getShapes(): Observable<Shape[]> {
    return this.getShapesResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get available packing elements
   */
  findPackingElementsResponse(): Observable<HttpResponse<PackingElement[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/packingElements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: PackingElement[] = null;
        _body = _resp.body as PackingElement[]
        return _resp.clone({body: _body}) as HttpResponse<PackingElement[]>;
      })
    );
  }

  /**
   * get available packing elements
   */
  findPackingElements(): Observable<PackingElement[]> {
    return this.findPackingElementsResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get packing layers
   */
  findPackingLayersResponse(): Observable<HttpResponse<PackingLayer[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/packingLayers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: PackingLayer[] = null;
        _body = _resp.body as PackingLayer[]
        return _resp.clone({body: _body}) as HttpResponse<PackingLayer[]>;
      })
    );
  }

  /**
   * get packing layers
   */
  findPackingLayers(): Observable<PackingLayer[]> {
    return this.findPackingLayersResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get StudyPackingLayers
   * @param id - study id
   */
  getStudyPackingLayersResponse(id: number): Observable<HttpResponse<ViewPackingLayer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/studies/${id}/packingLayers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewPackingLayer = null;
        _body = _resp.body as ViewPackingLayer
        return _resp.clone({body: _body}) as HttpResponse<ViewPackingLayer>;
      })
    );
  }

  /**
   * get StudyPackingLayers
   * @param id - study id
   */
  getStudyPackingLayers(id: number): Observable<ViewPackingLayer> {
    return this.getStudyPackingLayersResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * save packing
   * @param id - study id
   * @param body - body
   */
  savePackingResponse(params: ApiService.SavePackingParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/studies/${params.id}/packingLayers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * save packing
   * @param id - study id
   * @param body - body
   */
  savePacking(params: ApiService.SavePackingParams): Observable<void> {
    return this.savePackingResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get mesh view of product
   * @param id - id of product
   */
  getMeshViewResponse(id: number): Observable<HttpResponse<ViewMesh>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/products/${id}/meshView`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewMesh = null;
        _body = _resp.body as ViewMesh
        return _resp.clone({body: _body}) as HttpResponse<ViewMesh>;
      })
    );
  }

  /**
   * get mesh view of product
   * @param id - id of product
   */
  getMeshView(id: number): Observable<ViewMesh> {
    return this.getMeshViewResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * generate product mesh
   * @param idProd - undefined
   * @param body - undefined
   */
  generateMeshResponse(params: ApiService.GenerateMeshParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.body;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/products/${params.idProd}/generateMesh`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * generate product mesh
   * @param idProd - undefined
   * @param body - undefined
   */
  generateMesh(params: ApiService.GenerateMeshParams): Observable<void> {
    return this.generateMeshResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * generate product default mesh
   * @param idProd - undefined
   */
  generateDefaultMeshResponse(idProd: number): Observable<HttpResponse<ViewMesh>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/products/${idProd}/defaultMesh`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: ViewMesh = null;
        _body = _resp.body as ViewMesh
        return _resp.clone({body: _body}) as HttpResponse<ViewMesh>;
      })
    );
  }

  /**
   * generate product default mesh
   * @param idProd - undefined
   */
  generateDefaultMesh(idProd: number): Observable<ViewMesh> {
    return this.generateDefaultMeshResponse(idProd).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * initialize temperature
   * @param initTemp - undefined
   * @param idProd - undefined
   */
  initTemperatureResponse(params: ApiService.InitTemperatureParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.initTemp != null) __params = __params.set("initTemp", params.initTemp.toString());
    
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/products/${params.idProd}/initTemperature`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * initialize temperature
   * @param initTemp - undefined
   * @param idProd - undefined
   */
  initTemperature(params: ApiService.InitTemperatureParams): Observable<void> {
    return this.initTemperatureResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * get my recent studies
   */
  recentStudiesResponse(): Observable<HttpResponse<Study[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/recentStudies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Study[] = null;
        _body = _resp.body as Study[]
        return _resp.clone({body: _body}) as HttpResponse<Study[]>;
      })
    );
  }

  /**
   * get my recent studies
   */
  recentStudies(): Observable<Study[]> {
    return this.recentStudiesResponse().pipe(
      map(_r => _r.body)
    );
  }}

export module ApiService {
  export interface CheckControlViewParams {
    idStudy?: number;
    idProd?: number;
  }
  export interface CheckControlParams {
    idStudy?: number;
    idProd?: number;
  }
  export interface GetOptimumCalculatorParams {
    idStudyEquipment?: number;
    idStudy?: number;
  }
  export interface GetStudyEquipmentCalculationParams {
    idStudyEquipment: number;
    idStudy: number;
    checkOptim: boolean;
  }
  export interface GetEstimationHeadBalanceParams {
    idStudy: number;
    tr?: number;
  }
  export interface SizingEstimationResultParams {
    idStudy: number;
    tr?: number;
  }
  export interface HeatExchangeParams {
    idStudyEquipment: number;
    idStudy: number;
  }
  export interface TimeBasedParams {
    idStudyEquipment: number;
    idStudy: number;
  }
  export interface SaveStudyParams {
    id: number;
    body?: Study;
  }
  export interface UpdateProductParams {
    id: number;
    name?: string;
    dim3?: number;
    dim2?: number;
    dim1?: number;
  }
  export interface NewProductParams {
    name: string;
    id: number;
  }
  export interface AddEquipmentParams {
    idEquip: number;
    id: number;
  }
  export interface SaveStudyAsParams {
    name: string;
    id: number;
  }
  export interface GetEquipmentsParams {
    size?: number;
    processType?: number;
    model?: number;
    manufacturer?: number;
    family?: number;
    equipOrigin?: number;
    energy?: number;
  }
  export interface SaveProductionParams {
    id: number;
    body?: Production;
  }
  export interface UpdateProductElementParams {
    id: number;
    elementId: number;
    dim2?: number;
    description?: string;
  }
  export interface AppendElementsToProductParams {
    shapeId: number;
    id: number;
    componentId: number;
    dim3?: number;
    dim1?: number;
  }
  export interface RemoveProductElementParams {
    id: number;
    elementId: number;
  }
  export interface FindComponentsParams {
    waterpercent?: number;
    subfamily?: number;
    compfamily?: number;
  }
  export interface SavePackingParams {
    id: number;
    body: SavePackingLayer;
  }
  export interface GenerateMeshParams {
    idProd: number;
    body: GenMeshParams;
  }
  export interface InitTemperatureParams {
    initTemp: number;
    idProd: number;
  }
}
