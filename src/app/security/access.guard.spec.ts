import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AccessGuard } from './access.guard';
import { AuthService } from '../services/auth.service';

describe('AccessGuard', () => {
  let guard: AccessGuard;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [
        AccessGuard,
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    guard = TestBed.inject(AccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if user is logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(true);

    const result = guard.canActivate({} as any, {} as any);

    expect(result).toBeTrue();
    expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should block activation and redirect if user is not logged in', () => {
    mockAuthService.isLoggedIn.and.returnValue(false);

    const result = guard.canActivate({} as any, {} as any);

    expect(result).toBeFalse();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/contato/list');
  });
});
