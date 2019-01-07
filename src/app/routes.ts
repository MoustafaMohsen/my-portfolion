import { Routes} from '@angular/router'; 
import { PlatformsSectionComponent } from './platforms-section/platforms-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
export const routes:Routes=[
    {path:"#platforms",component:PlatformsSectionComponent},
    {path:"#work", component:WorkSectionComponent}
]