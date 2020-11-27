import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatoUsuario } from '../../../models/datousuario.model';
import { Registroregsithosp } from '../../../models/registroregsithosp.model';
import { SituacionHospitalProviderService } from '../../../providers/situacion-hospital/situacion-hospital-provider.service';


@Component({
  selector: 'app-situacion-hospital',
  templateUrl: './situacion-hospital.component.html',
  styleUrls: ['./situacion-hospital.component.less']
})
export class SituacionHospitalComponent implements OnInit {
  
  @Input()
  public DatoUsuario: DatoUsuario;

  

  sitHospForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;
  idHospital: number | string; 

  constructor(
    private formBuilder: FormBuilder,
    private situacionhospitaulservice: SituacionHospitalProviderService
  ){ 
    
  }

  ngOnInit() {
    this.sitHospForm = this.formBuilder.group({               
        
        camasTotales: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        camasOcupadas: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],            
        camasDisponibles: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        pacientesDerivados: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        medicos: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        kinesiologos: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        tens: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        enfermeria: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        hospital: ['']     
    });
    this.sitHospForm.get('hospital').patchValue(this.DatoUsuario._idHospital);
  }
  
  get camasTotales() { return this.sitHospForm.get('camasTotales'); }
  get camasOcupadas() { return this.sitHospForm.get('camasOcupadas'); }
  get camasDisponibles() { return this.sitHospForm.get('camasDisponibles'); }  
  get pacientesDerivados() { return this.sitHospForm.get('pacientesDerivados'); }
  get medicos() { return this.sitHospForm.get('medicos'); }
  get kinesiologos() { return this.sitHospForm.get('kinesiologos'); }
  get tens() { return this.sitHospForm.get('tens'); }
  get enfermeria() { return this.sitHospForm.get('enfermeria'); }
  get hospital() { return this.sitHospForm.get('hospital'); }

  async onSubmit() {
    let registrosithosp: Partial<Registroregsithosp> = {
      camasTotales: this.sitHospForm.get('camasTotales').value,
      camasOcupadas: this.sitHospForm.get('camasOcupadas').value,
      camasDisponibles: this.sitHospForm.get('camasDisponibles').value,
      pacientesDerivados: this.sitHospForm.get('pacientesDerivados').value,
      medicos: this.sitHospForm.get('medicos').value,
      kinesiologos: this.sitHospForm.get('kinesiologos').value,
      tens: this.sitHospForm.get('tens').value,
      enfermeria: this.sitHospForm.get('enfermeria').value,
      _idHospital: this.sitHospForm.get('hospital').value
    }
    try {
      await this.situacionhospitaulservice.registroSitHosp(registrosithosp).toPromise();
      this.mensaje="formulario completo";
      this.isDivVisible=true;
    } catch (error) {
      this.mensaje="falta rellenar campos";
      this.isDivVisible = true;
      console.log(error);
    }
    
  }

  onReset() {
      this.isDivVisible=false;
      this.sitHospForm.reset();
  }
  

}
