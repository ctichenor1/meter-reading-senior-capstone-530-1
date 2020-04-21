import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { OptionselectPage } from './optionselect.page';
describe('OptionselectPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptionselectPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(OptionselectPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=optionselect.page.spec.js.map