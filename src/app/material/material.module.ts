import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip'
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
