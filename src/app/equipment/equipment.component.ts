import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
equipmentArr: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks']
}
