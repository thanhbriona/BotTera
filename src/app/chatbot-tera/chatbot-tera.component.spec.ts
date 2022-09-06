import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotTeraComponent } from './chatbot-tera.component';

describe('ChatbotTeraComponent', () => {
  let component: ChatbotTeraComponent;
  let fixture: ComponentFixture<ChatbotTeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotTeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotTeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
